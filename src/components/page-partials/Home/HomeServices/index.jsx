import React, { Fragment } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

const HomeServices = () => {
    return (
        <section className="py-28 relative">
        <div
          className="absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-[#9089fc]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 z-0 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
            <div className="max-w-7xl mx-auto relative z-20">
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
