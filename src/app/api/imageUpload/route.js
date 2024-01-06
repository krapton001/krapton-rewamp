import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';

/**
 * upload image API that stores images in public folder
 *
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with the blogs data or an error message.
 */

export async function POST(req) {
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
    const fileName = `${Date.now()}_${file.name.split(' ')[0]}`;
    const path = `./public/assets/upload/${fileName}`;

    await writeFile(path, buffer);

    const imageUrl = `/public/assets/upload/${fileName}`;

    return NextResponse.json({
        status: 200,
        message: 'File is uploaded successfully',
        imageUrl,
    });
}
