import React, { Fragment } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

const HomeServices = () => {
    return (
        <section className="py-28">
            <div className="max-w-7xl mx-auto">
                <div className="text-center px-5 lg:px-16">
                    <h2 className="bg-gradient mb-4 text-4xl lg:text-7xl uppercase font-extrabold">Elevate Your Experience with Our Premium Services</h2>
                    <p className="text-gray-500 text-lg">
                        Elevate your business to unprecedented heights with our commitment to Excellence in Service, where unmatched quality and reliability aren't just promises, but the foundation of
                        everything we do. In today’s fast-paced world, staying ahead means not just meeting expectations, but exceeding them at every turn.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-5 gap-8 xl:grid-cols-4 mt-16">
                    {services.slice(0, 8).map((service, idx) => (
                        <Fragment key={`service-${idx}`}>
                            <ServiceCard service={service} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
