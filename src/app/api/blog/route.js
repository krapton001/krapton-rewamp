import { NextResponse } from 'next/server';
import connectDatabase from '../libs/databaseConn';
import blog from '../models/blog';

export async function POST(req) {
    try {
        const { title, description, createdBy, content, imageUrl, tags, views } = await req.json();
        const tagArray = tags.split(',').map((item) => item.trim());
        let createdData = { title, description, createdBy, content, imageUrl, views, tags: tagArray };
        await connectDatabase();
        const data = await blog.create(createdData);
        if (data) {
            return NextResponse.json({
                status: 201,
                message: 'blog created',
                blog: data,
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'bad request',
            error: error,
        });
    }
}

export async function GET(req) {
    try {
        const isArchived = req.nextUrl.searchParams.get('isArchived');
        await connectDatabase();
        const allBlogs = await blog.find({ isArchived });
        if (allBlogs.length) {
            return NextResponse.json({
                status: 200,
                message: 'getAllBlogs',
                data: allBlogs,
            });
        }
        return NextResponse.json({
            status: 204,
            message: 'No blogs found',
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'Something went wrong',
        });
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        await connectDatabase();
        await blog.findByIdAndDelete(id);
        return NextResponse({
            status: 200,
            message: 'blog deleted!',
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: 'bad request',
        });
    }
}

//upload image
// const uploadImage = async (req) => {
//     const image = req.files.image;

//     if (!image || !image.mimetype.include('image')) {
//         return NextResponse.json({ status: 400, message: 'invalid type' });
//     }
//     const cloudStorage = await new cloudStorage();
//     const uploadImage = await cloudStorage.upload(image);

//     const imageUrl = await cloudStorage.getDownloadURL(uploadImage);
//     NextResponse.json({ status: 200, imageUrl: imageUrl });
// };

// export default uploadImage;
