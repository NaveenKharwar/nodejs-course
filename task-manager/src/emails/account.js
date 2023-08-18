const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const sendWelcomeMail = (email, name) => {
	transporter.sendMail({
		from: '"Naveen Kharwar 👻" <naveen919827@gmail.com>',
		to: "naveen919827@gmail.com",
		subject: "Thank you for joining in!",
		text: `Welcome to the App, ${name}! `,
	  });
}

const cancellationMail = (email, name) => {
	transporter.sendMail({
		from: '"Task Manager App" <naveen919827@gmail.com>',
		to: "naveen919827@gmail.com",
		subject: "Your Feedback Matters - Account Cancellation",
		text: `Hello ${name}, We noticed that you recently canceled your account with us, and we're sorry to see you go. Your feedback is valuable to us, and we would greatly appreciate it if you could take a moment to share the reason for your account cancellation. Your insights will help us improve our services for all our customers.`,
	  });
}

module.exports = {
	sendWelcomeMail,
	cancellationMail
}