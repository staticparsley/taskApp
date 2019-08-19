const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'staticparsley92@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app ${name}!! I hope you like it`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'staticparsley92@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, hope to see you again`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
