import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

const fs = require('fs');
const dir = './public/assets/upload/';

/**
 * upload image API that stores images in public folder
 *
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with the blogs data or an error message.
 */

export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get('file');

        if (!file) {
            return NextRequest.json({
                code: 204,
                message: 'No image is uploaded.',
            });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);

        // Extract the file extension
        const extension = path.extname(file.name);

        const fileName = `${Date.now()}_${file.name.split(' ')[0]}${extension}`;
        const dir = './public/assets/upload/';
        const filePath = path.join(dir, fileName);

        // Ensure the directory exists
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        await writeFile(filePath, buffer);

        const imageUrl = `/assets/upload/${fileName}`;

        return NextResponse.json({
            status: 200,
            message: 'File is uploaded successfully',
            imageUrl,
        });
    } catch (e) {
        return NextResponse.json({
            status: 500,
            message: 'Something went wrong!',
            error: JSON.stringify(e),
        });
    }
}
