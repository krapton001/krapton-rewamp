import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="max-w-sm rounded-xl shadow group bg-white overflow-hidden border hover:shadow-xl hover:ring-2 hover:ring-primary relative">
            <div className="flex flex-col items-center gap-5 justify-center py-8">
                <LazyImg className="w-16 h-16" src={icon} alt={title} title={`${title} - ${description}`} />
                <div className="font-bold text-center text-gray-900 text-lg mb-2">{title}</div>
                {/* <p className="text-gray-500 text-sm">{description}</p> */}
            </div>
        </div>
    );
};

export default ServiceCard;
