import React, { Fragment } from 'react';
import ServiceListCard from './ServiceListCard';
import { services } from '@/data/services';

const ServiceList = () => {
    return (
        <section className="py-20 relative">
            <div className="text-center px-5 lg:px-16">
                <h2 className="bg-gradient mb-4 text-4xl lg:text-7xl uppercase font-extrabold">Upgrade to exceptionality: Discover our elite service offerings.</h2>
                <p className="text-gray-500 text-lg">
                    Elevate your business to unprecedented heights with our commitment to Excellence in Service, where unmatched quality and reliability aren't just promises, but the foundation of
                    everything we do. In today’s fast-paced world, staying ahead means not just meeting expectations, but exceeding them at every turn.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-5 gap-8 xl:grid-cols-3 mt-16 lg:mx-10">
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
