import Contact from '../models/contact.js';
import { contactUsMail , ThankYouMail } from '../config/mail.js';

const contactUs =async(req, res) => {
    try {
        const {name , email , message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({success : false , message : 'All fields in contact form are required' });
        }
        const newMsg = new Contact({ name , email , message });
        await newMsg.save();
        
        await contactUsMail({name , email , message});
        await ThankYouMail({name , email , message});

        return res.status(200).json({ success : true , message : 'Contact form submitted successfully' });

    } catch (error) {
        return res.status(500).json({ success : false , message : 'Internal server error while submitting contact form' });
    }
}

export default contactUs;