import LazyImg from '@/components/common/LazyImg';
import React, { Fragment } from 'react';
import BlogTag from '../Blog/BlogTag';

import dynamic from 'next/dynamic';
const Background = dynamic(() => import('../../common/GradientBg').then((mod) => mod.background2));

const BlogDetail = ({ blog }) => {
    const { title, description, createdBy, content, imageUrl, tags, views, _id } = blog;

    const renderTags = tags.map((tag, idx) => (
        <Fragment key={`btag-${idx}`}>
            <BlogTag>{tag}</BlogTag>
        </Fragment>
    ));

    return (
        <div className=" px-6 py-32 lg:px-8 relative">
                    <Background />
            <div className="mx-auto max-w-3xl text-base relative leading-7 text-gray-700">
                <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{title}</h1>
                <div className="md:flex md:items-center md:justify-between md:space-x-5 mb-10 mt-5">
                    <div className="flex items-center mt-2  space-x-5">
                        <div className="flex-shrink-0 items-center">
                            <div className="relative">
                                <LazyImg className="rounded-full h-12 w-12" />
                                <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="">
                            <h2 className="text-md font-bold text-gray-900">{createdBy}</h2>
                            <p className="text-sm font-medium text-gray-500">
                                <time dateTime="2020-08-25">August 25, 2020</time>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start mt-5 md:mt-0 gap-3">{renderTags}</div>
                </div>

                <figure className="mt-10 mb-20">
                    <LazyImg title={`${title} - ${description}`} alt={description} className="aspect-video rounded-xl bg-gray-50 object-cover mx-auto w-screen h-96" src={imageUrl} />
                </figure>
                <p className="mt-6 text-xl leading-8">{description} </p>
                <div className="mt-10" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default BlogDetail;
