<?php
// Endpoint modulo contatti: invia la richiesta a info@studiodallatorre.it via mail() di Plesk.
// Mittente = noreply@dominio del sito (Postfix lo riscrive verso il relay Azure),
// Reply-To = visitatore. Antispam: Cloudflare Turnstile + rate limit per IP.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DESTINATARIO = 'info@studiodallatorre.it';
const MITTENTE = 'noreply@studiodallatorre.it';
const HOST_AMMESSI = ['studiodallatorre.it', 'www.studiodallatorre.it'];

const SERVIZI = [
    'osteopatia' => 'Osteopatia',
    'osteopatia-pediatrica' => 'Osteopatia Pediatrica',
    'osteopatia-sportiva' => 'Osteopatia dello Sport',
    'osteopatia-gravidanza' => 'Osteopatia in Gravidanza',
    'osteopatia-geriatrica' => 'Osteopatia Geriatrica',
    'ginnastica-posturale' => 'Ginnastica Posturale',
    'altro' => 'Altro',
];
const ORARI = [
    'mattina' => 'Mattina (8:00–13:00)',
    'pomeriggio' => 'Pomeriggio (14:00–20:00)',
    'indifferente' => 'Indifferente',
];

function fine(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fine(405, ['ok' => false]);

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) fine(400, ['ok' => false]);

$clean = fn($v, $max) => mb_substr(trim(preg_replace('/[\r\n\t]+/', ' ', (string)($v ?? ''))), 0, $max);
$nome = $clean($in['firstName'] ?? '', 80);
$cognome = $clean($in['lastName'] ?? '', 80);
$email = $clean($in['email'] ?? '', 200);
$telefono = $clean($in['phone'] ?? '', 40);
$servizio = SERVIZI[$in['subject'] ?? ''] ?? '';
$orario = ORARI[$in['preferredTime'] ?? ''] ?? '';
$messaggio = mb_substr(trim(str_replace("\r", '', (string)($in['message'] ?? ''))), 0, 5000);

if ($nome === '' || $cognome === '' || $servizio === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($in['privacy'])) {
    fine(422, ['ok' => false]);
}

// Cloudflare Turnstile: il segreto sta fuori dalla document root (mai nel repo), nella cartella
// del dominio (la docroot è httpdocs/site/dist: si risale finché si trova turnstile.secret).
// Token mancante/non valido -> 403. Segreto assente o Cloudflare irraggiungibile -> si prosegue
// (resta il rate limit) per non perdere richieste vere.
$segreto = '';
foreach ([1, 2, 3, 4] as $su) {
    $f = dirname($_SERVER['DOCUMENT_ROOT'] ?? '', $su) . '/turnstile.secret';
    if (is_readable($f)) { $segreto = trim((string)file_get_contents($f)); break; }
}
if ($segreto === '') {
    error_log('contact.php: turnstile.secret mancante, verifica Turnstile saltata');
} else {
    $token = (string)($in['turnstile'] ?? '');
    if ($token === '' || strlen($token) > 2048) fine(403, ['ok' => false, 'motivo' => 'verifica']);
    $ctx = stream_context_create(['http' => [
        'method' => 'POST', 'timeout' => 5, 'ignore_errors' => true,
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query(['secret' => $segreto, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']),
    ]]);
    $raw = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $ctx);
    $esito = $raw !== false ? json_decode($raw, true) : null;
    if (!is_array($esito)) {
        error_log('contact.php: siteverify non raggiungibile, verifica Turnstile saltata');
    } elseif (empty($esito['success']) || !in_array($esito['hostname'] ?? '', HOST_AMMESSI, true)) {
        fine(403, ['ok' => false, 'motivo' => 'verifica']);
    }
}

// Rate limit semplice per IP: max 5 invii/ora
$f = sys_get_temp_dir() . '/contact_' . md5($_SERVER['REMOTE_ADDR'] ?? '');
$hits = array_filter(is_file($f) ? array_map('intval', file($f, FILE_IGNORE_NEW_LINES)) : [], fn($t) => $t > time() - 3600);
if (count($hits) >= 5) fine(429, ['ok' => false]);
$hits[] = time();
file_put_contents($f, implode("\n", $hits));

$corpo = "Nuova richiesta di prenotazione dal sito studiodallatorre.it\n\n"
    . "Nome: $nome $cognome\nEmail: $email\nTelefono: " . ($telefono !== '' ? $telefono : '—') . "\n"
    . "Servizio: $servizio\nOrario preferito: " . ($orario !== '' ? $orario : '—') . "\n\n"
    . "Messaggio:\n" . ($messaggio !== '' ? $messaggio : '(nessun messaggio)') . "\n\n"
    . "Consenso privacy: sì\n";

$headers = [
    'From' => '=?UTF-8?B?' . base64_encode('Studio Dalla Torre – Sito Web') . '?= <' . MITTENTE . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];
$subject = '=?UTF-8?B?' . base64_encode("Richiesta di prenotazione – $servizio") . '?=';
$ok = mail(DESTINATARIO, $subject, $corpo, $headers, '-f' . MITTENTE);
fine($ok ? 200 : 500, ['ok' => $ok]);
