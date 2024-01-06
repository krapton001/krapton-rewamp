import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, description, createdBy, content, imageUrl, tags, views } = blog;

    return (
        <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <LazyImg
                    src={imageUrl}
                    alt={title}
                    title={title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                        Mar 16, 2020
                    </time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Marketing
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0" />
                            {title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt
                        vel. Iusto corrupti dicta.
                    </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <LazyImg
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                                <span className="absolute inset-0" />
                                Michael Foster
                            </a>
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
