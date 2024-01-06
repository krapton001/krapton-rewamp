import nextConnect from 'next-connect';
import multer from 'multer';
import { NextResponse } from 'next/server';

// Multer configuration for file upload
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads', // Ensure this path exists
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
        },
    }),
});

// Create an instance of nextConnect
const apiRoute = nextConnect();

// Apply multer middleware for file upload
apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
    try {
        // After multer processes the file, it's available in req.file
        if (!req.file) {
            throw new Error('File was not uploaded');
        }

        // Your logic to handle the uploaded file goes here
        // For instance, saving the file info in a database

        // Return the URL of the uploaded file
        return res.status(201).json({
            status: 201,
            message: 'File uploaded successfully',
            fileUrl: `/uploads/${req.file.filename}`,
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error in file upload',
            error: error.toString(),
        });
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disable body parser since we're using multer
    },
};
