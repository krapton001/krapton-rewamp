import React, { Fragment } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

import dynamic from 'next/dynamic';
import { APP_TITLE } from '@/constants';
import SvgBg from '@/components/common/GradientBg/SvgBg';
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
        <div className="relative">
                          <SvgBg />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="flex items-start justify-start flex-col py-5 lg:py-20 text-left  relative">
                    <h2 className="mt-2 text-4xl lg:text-6xl font-bold    tracking-tight text-primary ">Discover a World of Innovation </h2>
                    <h1 className="mt-2  text-3xl font-poppins  lg:text-5xl font-bold py-3 tracking-tight text-gray-800 ">
                      
                        {APP_TITLE} Blogs Bring Cutting-Edge Technology to Life,
                    </h1>
                    <h2 className="mt-2 font-poppins  py-5 text-4xl lg:text-6xl font-bold relative  tracking-tight text-gray-800 ">
                    <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary opacity-50" preserveAspectRatio="none">
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                        </svg>
                    <span className='relative font-poppins '>
                     Just for You!</span>
                     </h2>
                </div>
                <div className="mx-auto relative mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <Background />
                {renderBlogs()
                }</div>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
};

export default BlogPage;
