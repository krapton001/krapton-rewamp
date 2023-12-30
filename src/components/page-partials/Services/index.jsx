import React from 'react';
import Hero from './Hero';
import ServiceList from './ServiceList';

const ServicePage = () => {
    return (
        <main className="w-full bg-white min-h-screen">
            <Hero />
            <ServiceList />
        </main>
    );
};

export default ServicePage;
