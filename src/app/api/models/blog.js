import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
    {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        createdBy: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        imageUrl: {
            type: String,
        },
        tags: {
            type: [String],
            default: [],
        },
        views: {
            type: Number,
        },
        isArchived: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const blog = mongoose.models.blog || mongoose.model('blog', blogSchema);

export default blog;
