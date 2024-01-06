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
        <div className="bg-white py-4 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-primaryDark">Latest Update</h2>
                    <p className="mt-2 text-3xl  md:text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Discover a World of Innovation: Our Blogs Bring Cutting-Edge Technology to Life, Just for You!</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">{renderBlogs()}</div>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
};

export default BlogPage;
