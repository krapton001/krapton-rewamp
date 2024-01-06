import { NextResponse } from 'next/server';
import connectDatabase from '../libs/databaseConn';
import blog from '../models/blog';
import Cors from 'cors';

/**
 * Handles POST request to create a new blog.
 *
 * @param {object} req - The incoming request object.
 * @returns {NextResponse} - The Next.js response object with creation status or error message.
 */

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: '*', // Reflect the request origin, or set to your own specific origins
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
export async function POST(req,res) {

    await runMiddleware(req, res, cors);
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }


    try {
        const { title, description, createdBy, content, imageUrl, tags, views } = await req.json();
        const tagArray = tags.split(',').map((item) => item.trim());
        let createdData = { title, description, createdBy, content, imageUrl, views, tags: tagArray };

        await connectDatabase();
        const data = await blog.create(createdData);

        return res.json({
            status: 201,
            message: 'Blog created',
            blog: data,
        });
    } catch (error) {
        return res.json({
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
    
    await runMiddleware(req, NextResponse, cors);
    if (req.method !== 'POST') {
        return NextResponse.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const isArchived = req.nextUrl.searchParams.get('isArchived') === 'true';

        // Pagination parameters
        const page = parseInt(req.nextUrl.searchParams.get('page')) || 1;
        const limit = parseInt(req.nextUrl.searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;

        await connectDatabase();

        // Find blogs with pagination
        const allBlogs = await blog.find({  }).skip(skip).limit(limit);

        // Get total number of blogs to calculate total pages
        const totalBlogs = await blog.countDocuments({ isArchived });
        const totalPages = Math.ceil(totalBlogs / limit);

        return NextResponse.json({
            status: allBlogs.length ? 200 : 204,
            message: allBlogs.length ? 'Blogs retrieved' : 'No blogs found',
            data: allBlogs,
            pagination: {
                currentPage: page,
                totalPages,
                limit,
            },
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
