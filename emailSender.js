    // Define the email options
    const mailOptions = {
        from: 'follymoet@gmail.com',
        to: 'follymoet@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email from Node.js using nodemailer.',
        };
    
        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });