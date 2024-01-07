import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const BlogDetail = ({ blog }) => {
    const { title, description, createdBy, content, imageUrl, tags, views, _id } = blog;

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <figure className="mt-10 mb-20">
                <img className="aspect-video rounded-xl bg-gray-50 object-cover mx-auto w-screen h-96" src={imageUrl} />
            </figure>
                <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
                <p className="mt-6 text-xl leading-8">{description} </p>
                <div className="mt-10 max-w-2xl" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default BlogDetail;
