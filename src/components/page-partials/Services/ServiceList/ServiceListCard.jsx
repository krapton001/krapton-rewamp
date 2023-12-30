import React from 'react';
import ServiceListCardBg from './ServiceListCardBg';

const ServiceListCard = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="max-w-sm rounded-xl min-h-48 group bg-white overflow-hidden border  relative flex items-center justify-center text-center">
            <div className="px-6 py-3">
                {/* {icon} */}
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
        </div>
    );
};

export default ServiceListCard;
