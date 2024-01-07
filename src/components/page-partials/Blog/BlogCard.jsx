import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, description, createdBy, imageUrl = '/assets/custom_icons/logo-full.webp', tags = [], views, _id } = blog;
    const url = `/blog/detail/${_id}`;
    const renderTags = tags.slice(0, 3).map((tag, idx) => (
        <a key={`tag-${idx}`} className="relative border z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {tag}
        </a>
    ));

    return (
        <article className="flex flex-col border rounded-2xl border-t-0 bg-white hover:bg-slate-100 items-start justify-between">
            <div className="relative w-full">
                <LazyImg src={imageUrl} alt={title} title={title} className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl p-5">
                <div className="mt-8 flex items-center gap-x-1 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                        Mar 16, 2020
                    </time>
                    {renderTags}
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">
                        <a href={url}>
                            <span className="absolute inset-0" />
                            {title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <LazyImg src="/assets/custom_icons/logo-full.webp" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span>
                                <span className="absolute inset-0" />
                                {createdBy}
                            </span>
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
