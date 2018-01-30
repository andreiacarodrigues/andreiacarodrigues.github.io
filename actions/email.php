<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../res/PHPMailer/src/Exception.php';
    require '../res/PHPMailer/src/PHPMailer.php';
    require '../res/PHPMailer/src/SMTP.php';

    /**
     * This example shows settings to use when sending via Google's Gmail servers.
     * This uses traditional id & password authentication - look at the gmail_xoauth.phps
     * example to see how to use XOAUTH2.
     * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
     */

    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP
    $mail->isSMTP();
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 2;
    //Set the hostname of the mail server
    $mail->Host = 'smtp.gmail.com';
    // use
    // $mail->Host = gethostbyname('smtp.gmail.com');
    // if your network does not support SMTP over IPv6
    //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
    $mail->Port = 587;
    //Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tls';
    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;
    //Username to use for SMTP authentication - use full email address for gmail
    $mail->Username = "andreiacarodrigueswebsite@gmail.com";
    //Password to use for SMTP authentication
    $mail->Password = "andreiacarodrigues130396";
    //Set who the message is to be sent from
    $mail->setFrom('andreiacarodrigueswebsite@gmail.com', 'andreiacarodrigues.github.io');
    //Set who the message is to be sent to
    $mail->addAddress('andreiacarodrigues@gmail.com');
    //Set the subject line
    $mail->Subject = 'PHPMailer GMail SMTP test';
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    //$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
    //Replace the plain text body with one created manually
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject ="Website Contact: " . $_POST['name'];
    $mail->Body = '<b>Email: </b>' . $_POST['email'] . '<br><br><b>Message: </b>' . $_POST['message'];
    $mail->AltBody = 'Email: ' . $_POST['email'] . '\n Message: ' . $_POST['message'];

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    //send the message, check for errors
    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
        header("Location: http://www.andreiacarodrigues.github.io"); /* Redirect browser */
        exit();
    }
?>