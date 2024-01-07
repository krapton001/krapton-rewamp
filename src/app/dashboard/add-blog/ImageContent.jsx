import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const ImageContent = () => {
    return (
        <div className="-ml-12 -mt-12 p-12 lg: lg:top- lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <LazyImg className="w-[48rem] h-[25rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="" />
        </div>
    );
};

export default ImageContent;
