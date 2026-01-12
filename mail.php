<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Try to load PHPMailer from different possible locations
$phpmailerPaths = [
    __DIR__ . '/PHPMailer/Exception.php',
    __DIR__ . '/../PHPMailer/Exception.php',
    'PHPMailer/Exception.php'
];

$phpmailerLoaded = false;
foreach ($phpmailerPaths as $path) {
    if (file_exists($path)) {
        $basePath = dirname($path);
        require $basePath . '/Exception.php';
        require $basePath . '/PHPMailer.php';
        require $basePath . '/SMTP.php';
        $phpmailerLoaded = true;
        break;
    }
}

if (!$phpmailerLoaded) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'PHPMailer library not found']);
    exit();
}

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// If JSON decode failed, try POST data (for FormData compatibility)
if (json_last_error() !== JSON_ERROR_NONE) {
    $data = $_POST;
    // Log the error for debugging (remove in production)
    error_log('JSON decode error: ' . json_last_error_msg());
    error_log('Input received: ' . substr($input, 0, 200));
}

// Extract and validate form fields
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
    exit();
}

// SMTP Configuration
// TODO: Move these to environment variables for security
$smtpUsername = 'gvccha@gmail.com';
$smtpPassword = 'gykjqamgocvxkjfd'; // Gmail App Password (no spaces: gykj qamg ocvx kjfd)
$recipientEmail = 'gvccha@gmail.com';

// Validate credentials format
if (strlen($smtpPassword) !== 16) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid app password length. Gmail app passwords must be exactly 16 characters.'
    ]);
    exit();
}

// Debug output array (accessible in catch block)
$debugOutput = [];

try {
    $mail = new PHPMailer(true);

    // SMTP config
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    
    // Use TLS on port 587 (most reliable for Gmail)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // SMTP Options for SSL/TLS (removed verify_peer=false for better compatibility)
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer_name' => false
        )
    );
    
    // Set timeout (optimized for faster response)
    $mail->Timeout = 15;
    
    // Debug output disabled for production
    // Enable by setting SMTPDebug = 2 if troubleshooting is needed
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = function($str, $level) use (&$debugOutput) {
        // Capture debug info only if debugging is enabled
        if ($level > 0) {
            $debugOutput[] = trim($str);
            error_log("SMTP Debug ($level): $str");
        }
    };

    // Set From email to user's email, Reply-To to user's email
    $mail->setFrom($smtpUsername, 'Contact Form');
    $mail->addReplyTo($email, $name);
    $mail->addAddress($recipientEmail);
    
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    // Email subject
    $mail->Subject = 'Contact Form: ' . htmlspecialchars($subject);

    // Email body
    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
    <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
    <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->Body = $body;
    
    // Plain text alternative
    $mail->AltBody = "New Contact Form Submission\n\n" .
                     "Name: $name\n" .
                     "Email: $email\n" .
                     "Subject: $subject\n\n" .
                     "Message:\n$message";

    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    $errorMessage = isset($mail) ? $mail->ErrorInfo : $e->getMessage();
    
    // Log detailed error for debugging
    error_log('PHPMailer Error: ' . $errorMessage);
    error_log('Exception: ' . $e->getMessage());
    error_log('Username used: ' . $smtpUsername);
    error_log('Password length: ' . strlen($smtpPassword));
    
    // Include debug output if available (only in development)
    $debugInfo = '';
    if (isset($debugOutput) && !empty($debugOutput) && $mail->SMTPDebug > 0) {
        $debugInfo = ' | Debug: ' . implode(' | ', array_slice($debugOutput, -5)); // Last 5 debug messages
    }
    
    // Provide user-friendly error message
    $userMessage = 'Failed to send email: ' . $errorMessage;
    if ($debugInfo) {
        $userMessage .= $debugInfo;
    }
    if (strpos($errorMessage, 'Could not authenticate') !== false) {
        $userMessage .= ' Please verify: 1) Gmail account has 2-Step Verification enabled, 2) App Password is correct (16 characters, no spaces), 3) App Password was created for "Mail" application, 4) Email address is correct: ' . $smtpUsername;
    }
    
    echo json_encode([
        'success' => false,
        'message' => $userMessage
    ]);
}
?>
