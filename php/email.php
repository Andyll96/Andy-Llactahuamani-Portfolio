<!-- Must setup email client settings on hosting site b/c you need an email to send from. Only then can mail function work. -->
<!-- See https://www.hostinger.com/tutorials/send-emails-using-php-mail -->

<html lang="en">

<head>

<body>

    <?php
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $subject = $_POST['subjectLine'];
    $message = $_POST['message'];

    $to = "andysl_1996@hotmail.com";

    $time = time();
    mail($to, $subject, $message, $email);
    print "Script Ran $time";
    ?>
</body>

</html>