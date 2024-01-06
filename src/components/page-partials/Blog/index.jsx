import React, { Fragment } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogPage = ({
    blogs = [],
    pagination = { },
}) => {
    const renderBlogs = () => {
        return blogs.map((blog, idx) => {
            return (
                <Fragment key={idx + '-blog'}>
                    <BlogCard blog={blog} />
                </Fragment>
            );
        });
    };

    return (
        <div className="bg-white py-24 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">{renderBlogs()}</div>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
};

export default BlogPage;
