require("dotenv").config();
const nodemailer = require("nodemailer");
const mailerhbs = require("nodemailer-express-handlebars");
const path = require('path');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
        port: 465,
        secure:true,
    secureConnection: false,
    logger: false,
    debug: true,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
    }
}, {
    from: process.env.MAILER_USER
});
const sendMail = async (to, subject, html, context, attachments) => {
    console.log("sendMail function here------",to, subject, html, context, attachments)
    if (process.env.SMTP_ENABLED) {
        let eOptions = {
            to: to,
            subject: subject
        }
        if (context) {
            eOptions.template = html;
            eOptions.context = context;
            if (attachments) eOptions.attachments = attachments;

            console.log(" eOptions >>>>>>>>>>>>>>>>>>>>>", eOptions);
            return transporter.sendMail(eOptions, function (err, info) {
                console.log("done", html);
                console.log("err, info >>>>>>>>>", err, info);
                transporter.close()
            });
        } else {
            eOptions.html = html;
            if (attachments) eOptions.attachments = attachments
            return transporter.sendMail(eOptions);
        }
    }
};
const userMail = async function (data) {
    console.log(data)
     let careerOptions = {
        viewEngine: {
            extname: '.hbs',
            layoutsDir: './src/views',
            defaultLayout: 'email'
        },
        viewPath: './src/views',
        extName: '.hbs'
    };
    
    transporter.use('compile', mailerhbs(careerOptions));
     return sendMail("gopinathseeniappan@gmail.com","position", "email", data)

 };
module.exports = {
    userMail
};