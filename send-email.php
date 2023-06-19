<?php
 //Set Variables
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$message = nl2br(htmlspecialchars($_POST["message"]));
	 
	//Import PHPMailer classes into the global namespace
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require_once 'vendor/autoload.php';

	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	//to view proper logging details for success and error messages
	// $mail->SMTPDebug = 1;
	$mail->Host = 'smtp.gmail.com';  //gmail SMTP server
	$mail->Username = 'mbedge00@gmail.com';   //email
	$mail->Password = 'qhdxndruhelwpige';   //16 character obtained from app password created
	$mail->Port = 465;                    //SMTP port
	$mail->SMTPSecure = "ssl";


	//sender information
	$mail->setFrom($email, $name);

	//receiver address and name
	$mail->addAddress('contact@michaeledgington.com');

	$mail->isHTML(true);

	$mail->Subject = ($subject) . "(" . $email . ")";
	$mail->Body    = ($message);

	// Send mail   
	if (!$mail->send()) {
		echo 'Email not sent an error was encountered: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent.';
	}

	$mail->smtpClose();

