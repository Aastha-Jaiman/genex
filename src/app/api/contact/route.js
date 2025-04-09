
import nodemailer from 'nodemailer';

const sendEmail = async (options) => {

    const transporter = nodemailer.createTransport({
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.mail,
        subject: options.subject,
        html: options.htmlMsg
    }
    await transporter.sendMail(mailOptions)
}

export async function POST(req) {
    const body = await req.json();
    const { name, company , email, phone, message } = body;
    console.log(body)

    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Travel Inquiry - Genex</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f2f7fa; padding: 20px;">
        <div style="max-width: 600px; background: #fff; padding: 20px; margin: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: #2c82c9; margin: 0;">Beyond Maps</h2>
                <p style="color: #666; font-style: italic; margin: 5px 0;">Your journey begins here</p>
            </div>
            
            <h3 style="color: #2c82c9; text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Travel Inquiry</h3>
            
            <p><strong>Name:</strong> ${name}</p>
             <p><strong>Name:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Inquiry Details:</strong></p>
            <p style="background: #f2f7fa; padding: 10px; border-radius: 5px; border-left: 4px solid #2c82c9;">${message}</p>
            
           
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            
            <div style="text-align: center;">
                <p style="font-size: 12px; color: #777;">This is an automated message from Gnenx.</p>
                <p style="font-size: 12px; color: #777;">Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>`;


   const clienthtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You for Reaching Out</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f8ff; padding: 20px;">
    <div style="max-width: 600px; background: #ffffff; padding: 20px; margin: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #0077b6; text-align: center;">Thank You for Contacting Beyond Maps!</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>We appreciate you getting in touch with <strong>Genex</strong>. Your inquiry has been received, and our team will get back to you shortly.</p>
        
        <p>Warm regards,<br><strong>The Genex Team</strong></p>
        <p>📞 <strong>+91 XXXXXXXXXX</strong> </p>
        <a href="mailto:hello@genex.com"> 📧 hello@genex.com</a>
        <p>🌐 <a href="https://www.genex.com/" target="_blank">Visit Our Website</a></p>
        <hr>
        <p style="font-size: 12px; color: #777; text-align: center;">This is an automated message. Please do not reply to this email.</p>
    </div>
</body>
</html>`;




    if (!name || !email || !phone || !message) {
        return new Response(JSON.stringify({ message: 'All fields are required adsmafas' }), { status: 400 });
    } else {

        await sendEmail({
            mail: process.env.ADMIN_MAIL,
            subject: "Contact Form Submission",
            htmlMsg: emailHtml,
        })
        await sendEmail({
            mail: email,
            subject: "Thank You for Contacting Us",
            htmlMsg: clienthtml,
        })
        return new Response(JSON.stringify({ message: 'Email sent successfully', success: true }), { status: 200 });
    }


}





