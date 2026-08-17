<?php
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'message'=>'Method not allowed']); exit; }
$recipient = 'shermangu@yahoo.com';
$domain = 'knoxchinesemedicine.com.au';
function clean_line($v){ return trim(preg_replace('/[\r\n]+/', ' ', (string)$v)); }
$name = clean_line($_POST['name'] ?? '');
$phone = clean_line($_POST['phone'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = trim((string)($_POST['message'] ?? ''));
$website = trim((string)($_POST['website'] ?? ''));
$started = (int)($_POST['form_started'] ?? 0);
$lang = clean_line($_POST['lang'] ?? 'en');
if ($website !== '') { echo json_encode(['ok'=>true]); exit; } // honeypot
if ($started > 0 && time() - $started < 3) { http_response_code(400); echo json_encode(['ok'=>false,'message'=>'Please try again.']); exit; }
if ($name === '' || !$email || $message === '') { http_response_code(422); echo json_encode(['ok'=>false,'message'=>'Please complete the required fields.']); exit; }
if (mb_strlen($name) > 120 || mb_strlen($phone) > 80 || mb_strlen($message) > 5000) { http_response_code(422); echo json_encode(['ok'=>false,'message'=>'Message is too long.']); exit; }
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir().'/kcm_contact_'.hash('sha256',$ip);
if (is_file($rateFile)) { $last=(int)@file_get_contents($rateFile); if ($last && time()-$last < 20) { http_response_code(429); echo json_encode(['ok'=>false,'message'=>'Please wait before sending another message.']); exit; } }
@file_put_contents($rateFile,(string)time(),LOCK_EX);
$subject = 'Website enquiry from '.$name;
$body = "New website enquiry\n\nName: $name\nPhone: $phone\nEmail: $email\nLanguage: $lang\n\nMessage:\n$message\n\nSubmitted from: knoxchinesemedicine.com.au";
$headers = [
  'From: Knox Chinese Medicine Website <noreply@'.$domain.'>',
  'Reply-To: '.$email,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/'.phpversion()
];
$ok = @mail($recipient, $subject, $body, implode("\r\n", $headers));
if (!$ok) { http_response_code(500); echo json_encode(['ok'=>false,'message'=>'Mail service is not configured. Please call or email the clinic.']); exit; }
echo json_encode(['ok'=>true]);
?>