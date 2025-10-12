import Contact from '../models/contact.js';
import { contactUsMail , ThankYouMail } from '../config/mail.js';

const contactUs =async(req, res) => {
    try {
        console.log('Contact form data received:', req.body);
        const {name , email , message} = req.body;
        
        if(!name || !email || !message){
            console.log('Missing fields:', { name: !!name, email: !!email, message: !!message });
            return res.status(400).json({
                success : false , 
                message : 'All fields in contact form are required',
                missingFields: {
                    name: !name,
                    email: !email, 
                    message: !message
                }
            });
        }
        
        console.log('Saving contact to database...');
        const newMsg = new Contact({ name , email , message });
        await newMsg.save();
        console.log('Contact saved successfully');
        
        console.log('Sending emails...');
        await contactUsMail({name , email , message});
        await ThankYouMail({name , email , message});
        console.log('Emails sent successfully');

        return res.status(200).json({ success : true , message : 'Contact form submitted successfully' });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ 
            success : false , 
            message : 'Internal server error while submitting contact form',
            error: error.message 
        });
    }
}

export default contactUs;