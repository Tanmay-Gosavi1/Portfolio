import transporter from '../utils/Nodemail.js'
import dotenv from 'dotenv'
dotenv.config()

export const contactUsMail = async(data)=>{
    try {
        const {name , email , message} = data;
        const response = await transporter.sendMail({
            from : process.env.SENDER_EMAIL ,
            to : process.env.OWNER_EMAIL ,
            subject : 'New Contact Form Submission',
            text : `You have a new contact form submission from ${name}.`,
            html : `
                <h3>Contact Form Details</h3>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Message: ${message}</li>
                </ul>
            `
        })
        // console.log(response)
    
    } catch (error) {
        console.log(error.message)
    }
}

export const ThankYouMail = async(data)=>{
    try {
        const {name , email , message} = data;
        const response =await transporter.sendMail({
            from : process.env.SENDER_EMAIL ,
            to : email ,
            subject : 'Thank you for contacting us',
            text : `Dear ${name}, thank you for reaching out to us.`,
            html : `
                <h3>Thank You for Your Message</h3>
                <p>Dear ${name},</p>
                <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
                <h4>Message Details</h4>
                <ul>
                    <li>Email: ${email}</li>
                    <li>Message: ${message}</li>
                </ul>
            `
        })
        // console.log(response)

    } catch (error) {
        console.log(error.message)
    }
}