<?php

include 'class-phpmailer.php';
include 'class-smtp.php';
$mail = new PHPMailer();

$mail->IsSMTP();
$mail->CharSet = 'utf-8';
$mail->Encoding = 'base64';
$mail->SMTPSecure = 'tls';
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$mail->Host = '';
$mail->Port = 587;
$mail->Username = "";
$mail->Password = "";
$mail->From = '';
$mail->FromName = '';
$mail->AddAddress('');

$mail->isHTML(true);

$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];
$subject = "Feedback Form, {$name}";

$mail->Subject = $subject;
$mail->Body = "<b>Имя:</b> $name <br><br> <b>Телефон:</b> $phone<br><br> <b>Коментарий:</b> $message<br>";
$mail->AltBody = "<b>Имя:<b> $name <br><br> <b>Телефон:</b> $phone<br><br> <b>Коментарий:</b> $message<br>";

$mail->Send();