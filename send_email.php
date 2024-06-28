<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "rishisharma3034@gmail.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    $email_content = "<h2>Contact Form Submission</h2>";
    $email_content .= "<p><strong>Name:</strong> $name</p>";
    $email_content .= "<p><strong>Email:</strong> $email</p>";
    $email_content .= "<p><strong>Message:</strong></p>";
    $email_content .= "<p>$message</p>";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "There was a problem sending your message. Please try again.";
    }
}
?>
