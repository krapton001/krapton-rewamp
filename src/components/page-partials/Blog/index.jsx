import React, { Fragment } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

import dynamic from 'next/dynamic';
import { APP_TITLE } from '@/constants';
const Background = dynamic(() => import('../../common/GradientBg').then((mod) => mod.background2));

const BlogPage = ({ blogs = [], pagination = {} }) => {
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
        <div className=" relative">
            <Background />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-5xl py-20 text-center">
                    <h2 className="mt-2 text-3xl  md:text-5xl font-extrabold tracking-tight text-primary sm:text-4xl">Discover a World of Innovation </h2>
                    <h1 className="mt-2 text-3xl  md:text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{APP_TITLE} Blogs Bring Cutting-Edge Technology to Life, Just for You!</h1>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">{renderBlogs()}</div>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
};

export default BlogPage;
