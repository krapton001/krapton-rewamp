import { NextResponse } from 'next/server';
import connectDatabase from '../../../../../libs/databaseConn';
import blog from '../../../../../models/blog';

//get a single blog by its id
export async function GET(req, { params }) {
    const { id } = params;
    await connectDatabase();
    const oneBlog = await blog.findById(id);
    if (!oneBlog) return NextResponse.json({ status: 204, message: 'blog not found' });
    return NextResponse.json({
        status: 200,
        data: oneBlog,
    });
}

//update a blog by its id
export async function PUT(req, { params }) {
    const { id } = params;
    const { title, description, createdBy, content, imageUrl, tags, views } = await req.json();
    await connectDatabase();
    const oneBlog = await blog.findById(id);
    if (!oneBlog) {
        return NextResponse.json({ status: 204, message: 'no content' });
    }
    let updatedData = {
        title: title ? title : oneBlog.title,
        description: description ? description : oneBlog.description,
        createdBy: createdBy ? createdBy : oneBlog.createdBy,
        content: content ? content : oneBlog.content,
        imageUrl: imageUrl ? imageUrl : oneBlog.imageUrl,
        tags: tags ? tags.split(',').map((item) => item.trim()) : oneBlog.tags,
        views: views ? views : oneBlog.views,
    };
    const updatedBlog = await blog.findByIdAndUpdate(id, updatedData);
    if (!updatedBlog) return NextResponse.json({ status: 204, message: 'blog not found' });
    return NextResponse.json({
        status: 200,
        message: 'blog is updated',
    });
}
