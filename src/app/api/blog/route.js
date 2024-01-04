import { NextResponse } from 'next/server';
import connectDatabase from '../libs/databaseConn';
import blog from '../models/blog';

/**
 * Handles POST request to create a new blog.
 * 
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with creation status or error message.
 */
export async function POST(req) {
    try {
        const { title, description, createdBy, content, imageUrl, tags, views } = await req.json();
        const tagArray = tags.split(',').map(item => item.trim());
        let createdData = { title, description, createdBy, content, imageUrl, views, tags: tagArray };

        await connectDatabase();
        const data = await blog.create(createdData);

        return NextResponse.json({
            status: 201,
            message: 'Blog created',
            blog: data,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'Bad request',
            error: error.toString(),
        });
    }
}

/**
 * Handles GET request to retrieve all blogs or blogs with a specific archival status.
 * 
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with the blogs data or an error message.
 */
export async function GET(req) {
    try {
        const isArchived = req.nextUrl.searchParams.get('isArchived') === 'true';
        await connectDatabase();
        const allBlogs = await blog.find({ isArchived });

        return NextResponse.json({
            status: allBlogs.length ? 200 : 204,
            message: allBlogs.length ? 'Blogs retrieved' : 'No blogs found',
            data: allBlogs,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'Something went wrong',
            error: error.toString(),
        });
    }
}

/**
 * Handles DELETE request to delete a blog by ID.
 * 
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with deletion status or error message.
 */
export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDatabase();
        await blog.findByIdAndDelete(id);

        return NextResponse.json({
            status: 200,
            message: 'Blog deleted',
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'Bad request',
            error: error.toString(),
        });
    }
}