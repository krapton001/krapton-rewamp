import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        default: '',
    },
    phNum: {
        type: String,
        default: '',
    },
    msg: {
        type: String,
        default: '',
    },
    location: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
    purpose: {
        type: String,
        default: '',
    },
    seen: {
        type: Boolean,
        default: false,
    },
});

const contact = mongoose.models.contact || mongoose.model('contact', contactSchema);

export default contact;
