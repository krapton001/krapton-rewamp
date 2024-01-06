import { NextResponse } from 'next/server';
import connectDatabase from '../../libs/databaseConn';
import blog from '../../models/blog';

/**
 * Handles GET request to retrieve a blog by ID.
 *
 * @param {object} req - The incoming request object.
 * @param {object} params - Destructured parameters object from the request.
 * @returns {NextResponse} - The Next.js response object with the blog data or an error message.
 */
export async function GET(req, { params }) {
    const { id } = params;

    // Connect to the database
    await connectDatabase();

    // Attempt to find the blog by ID
    const oneBlog = await blog.findById(id);

    // Return 204 status if no blog is found
    if (!oneBlog) return NextResponse.json({ status: 204, message: 'Blog not found' });

    // Return the found blog with 200 status
    return NextResponse.json({
        status: 200,
        data: oneBlog,
    });
}

/**
 * Handles PUT request to update a blog by ID.
 *
 * @param {object} req - The incoming request object.
 * @param {object} params - Destructured parameters object from the request.
 * @returns {NextResponse} - The Next.js response object with a success or error message.
 */
export async function PUT(req, { params }) {
    const { id } = params;

    // Parse request body
    const { title, description, createdBy, content, imageUrl, tags, views } = await req.json();

    // Connect to the database
    await connectDatabase();

    // Attempt to find the blog by ID
    const oneBlog = await blog.findById(id);

    // Return 204 status if no blog is found
    if (!oneBlog) {
        return NextResponse.json({ status: 204, message: 'No content' });
    }

    // Prepare the updated data, falling back to existing values if not provided
    let updatedData = {
        title: title || oneBlog.title,
        description: description || oneBlog.description,
        createdBy: createdBy || oneBlog.createdBy,
        content: content || oneBlog.content,
        imageUrl: imageUrl || oneBlog.imageUrl,
        tags: tags ? tags.split(',').map((item) => item.trim()) : oneBlog.tags,
        views: views || oneBlog.views,
    };

    // Attempt to update the blog
    const updatedBlog = await blog.findByIdAndUpdate(id, updatedData);

    // Return 204 status if update fails
    if (!updatedBlog) return NextResponse.json({ status: 204, message: 'Blog not found' });

    // Return a success message with 200 status
    return NextResponse.json({
        status: 200,
        message: 'Blog is updated',
    });
}
