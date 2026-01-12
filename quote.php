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
$phone = trim($data['phone'] ?? '');
$serviceRequired = trim($data['serviceRequired'] ?? '');
$budget = trim($data['budget'] ?? '');
$location = trim($data['location'] ?? '');
$customization = trim($data['customization'] ?? '');

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required';
}

if (empty($serviceRequired)) {
    $errors[] = 'Service required is required';
}

if (empty($budget)) {
    $errors[] = 'Budget is required';
}

if (empty($location)) {
    $errors[] = 'Location is required';
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
    
    // Set timeout (reduced for faster response)
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

    // Set From email
    $mail->setFrom($smtpUsername, 'Quote Request Form');
    $mail->addAddress($recipientEmail);
    
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    // Email subject
    $mail->Subject = 'New Quote Request: ' . htmlspecialchars($serviceRequired);

    // Email body
    $body = "
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
    <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
    <p><strong>Service Required:</strong> " . htmlspecialchars($serviceRequired) . "</p>
    <p><strong>Budget:</strong> " . htmlspecialchars($budget) . "</p>
    <p><strong>Location:</strong> " . htmlspecialchars($location) . "</p>
    " . (!empty($customization) ? "<p><strong>Customization Required:</strong></p><p>" . nl2br(htmlspecialchars($customization)) . "</p>" : "") . "
    ";

    $mail->Body = $body;
    
    // Plain text alternative
    $mail->AltBody = "New Quote Request\n\n" .
                     "Name: $name\n" .
                     "Phone: $phone\n" .
                     "Service Required: $serviceRequired\n" .
                     "Budget: $budget\n" .
                     "Location: $location\n" .
                     (!empty($customization) ? "\nCustomization Required:\n$customization\n" : "");

    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Quote request sent successfully'
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
    $userMessage = 'Failed to send quote request: ' . $errorMessage;
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

