import LazyImg from '@/components/common/LazyImg';
import React, { Fragment } from 'react';
import BlogTag from './BlogTag';
import { DEFAULT_IMAGE } from '@/constants';

const BlogCard = ({ blog }) => {
    const { title, description, createdBy, imageUrl = '/assets/custom_icons/logo-full.webp', tags = [], views, _id } = blog;
    const url = `/blog/detail/${_id}`;
    const renderTags = tags.slice(0, 3).map((tag, idx) => (
        <Fragment key={`tag-${idx}`}>
            <BlogTag>{tag}</BlogTag>
        </Fragment>
    ));

    return (
        <div className="overflow-hidden rounded-xl ring-1 ring-gray-200  shadow bg-white  relative group flex flex-col hover:ring-2 hover:ring-primary  hover:bg-gray-100/50 hover:border-primary ">
            <div className="aspect-w-4 aspect-h-2">
                <LazyImg
                    src={imageUrl}
                    className="object-cover h-52 object-top w-full"
                />
            </div>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <a href={url} className="focus:outline-none" aria-label="Nuxt 3.9" tabIndex={-1}>
                    <span className="absolute inset-0" aria-hidden="true" />
                </a>
                <div className="mb-6 flex gap-2">
                    {renderTags}
                </div>
                <p className="text-gray-900  font-semibold truncate flex items-center gap-1.5 text-lg">
                    {title}
                </p>
                <p className="text-[15px] text-gray-500  mt-1 line-clamp-2">
                    {description}
                </p>
            </div>
            <div className="px-4 py-4 sm:px-6 pt-0">

                <div className="flex items-center justify-between gap-3">
                    <time className="text-gray-500 ">December 25, 2023</time>
                    <div className="inline-flex flex-row-reverse justify-end">
                        <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-6 w-6 text-xs ring-2 ring-white  -me-1.5 first:me-0 lg:hover:scale-110 lg:hover:ring-primary-500  transition-transform">
                            <LazyImg className="rounded-full h-6 w-6 text-xs" alt={createdBy} src={DEFAULT_IMAGE} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
