import React, { Fragment } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';
import dynamic from 'next/dynamic';
const Background = dynamic(() => import('../../../common/GradientBg').then((mod) => mod.background2));
const HomeServices = () => {
    return (
        <section className="py-28 relative">
            <Background />
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="text-center px-5 lg:px-16">
                    <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        Elevate Your Experience <span className="text-primary block">with Our World-Class Premium Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Elevate your business to unprecedented heights with our commitment to Excellence in Service, where unmatched quality and reliability aren't just promises, but the foundation of
                        everything we do. In today’s fast-paced world, staying ahead means not just meeting expectations, but exceeding them at every turn.
                    </p>
                </div>
                <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 px-5 gap-8 xl:grid-cols-4 mt-16">
                    {services.slice(0, 12).map((service, idx) => (
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
