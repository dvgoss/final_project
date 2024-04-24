<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP(); 
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'dvanoeverengoss@gmail.com';
    $mail->Password = 'rary wrnt cery isqx';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('dvanoeverengoss@gmail.com', 'Portfolio');
    $mail->addAddress('dvanoeverengoss@gmail.com', 'Deja');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Site Contact';
    $mail->Body = 'This is an email from the Contact Page.';

    // Send the email
    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
