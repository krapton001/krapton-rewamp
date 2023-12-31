import React, { Fragment } from 'react';
import ServiceListCard from './ServiceListCard';

const ServiceList = ({ services = [] }) => {
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto text-center px-4 xl:px-0">
                <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="block">Upgrade to exceptionality:</span> <span className="bg-gradient">Discover our elite service offerings.</span>
                </h2>
                <p className="text-gray-500 text-lg">
                    Elevate your business to unprecedented heights with our commitment to Excellence in Service, where unmatched quality and reliability aren't just promises, but the foundation of
                    everything we do. In today’s fast-paced world, staying ahead means not just meeting expectations, but exceeding them at every turn.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 xl:px-0 gap-8 xl:grid-cols-3 mt-16">
                {services.map((service, idx) => (
                    <Fragment key={`service-${idx}`}>
                        <ServiceListCard service={service} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default ServiceList;
