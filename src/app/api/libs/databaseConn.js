import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected...');
    } catch (error) {
        throw error;
    }
};

export default connectDatabase;
