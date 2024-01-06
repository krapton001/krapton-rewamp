import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
const fs = require('fs');

/**
 * upload image API that stores images in public folder
 *
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with the blogs data or an error message.
 */
export async function POST(req) {
    try {
        // Parsing the form data from the request
        const data = await req.formData();
        const file = data.get('file');

        // Check if a file was uploaded
        if (!file) {
            // Return a response indicating no file was uploaded
            return NextRequest.json({
                code: 204,
                message: 'No image is uploaded.',
            });
        }

        // Convert the file into a Buffer for writing to the filesystem
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);

        // Extract the file extension from the original file name
        const extension = path.extname(file.name);

        // Generate a unique file name using a hash
        const hash = crypto.createHash('sha256');
        hash.update(`${Date.now()}_${file.name}`);
        const uniqueName = hash.digest('hex').substring(0, 16);

        const fileName = `${uniqueName}${extension}`;

        // Define the directory and file path for saving the file
        const dir = './public/assets/upload/';

        // Use an absolute path for the directory
        const uploadDir = path.join(__dirname, 'public', 'assets', 'upload');

        // Ensure the upload directory exists, create it if not
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Define the file path for saving the file
        const filePath = path.join(uploadDir, fileName);

        // Write the file to the filesystem
        await writeFile(filePath, buffer);

        // Construct the URL path for accessing the uploaded file
        const imageUrl = `/assets/upload/${fileName}`;

        // Return a successful response with the image URL
        return NextResponse.json({
            status: 200,
            message: 'File is uploaded successfully',
            imageUrl,
        });
    } catch (e) {
        // Handle any errors during the process
        return NextResponse.json({
            status: 500,
            message: 'Something went wrong!',
            error: JSON.stringify(e),
        });
    }
}
