import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="max-w-sm rounded-xl shadow group bg-white overflow-hidden border hover:shadow-xl hover:border-primary relative">
            <div className="px-6 py-10">
                <LazyImg className="mx-auto w-24 " src={icon} alt={title} title={`${title} - ${description}`} />
                <div className="font-bold text-center text-xl mb-2">{title}</div>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
