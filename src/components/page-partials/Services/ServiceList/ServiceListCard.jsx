import React from 'react';
import ServiceListCardBg from './ServiceListCardBg';
import LazyImg from '@/components/common/LazyImg';

const ServiceListCard = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="max-w-sm rounded-xl min-h-48 group bg-white overflow-hidden border  relative flex items-center justify-center">
            <div className="px-5 py-10">
                <LazyImg src={icon} className="h-20 w-20  mb-2" />
                <div className="font-bold text-xl">{title}</div>
                <p className="mt-5 text-gray-500 text-sm text-left">{description}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;
