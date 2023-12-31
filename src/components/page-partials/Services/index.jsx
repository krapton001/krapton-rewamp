import React from 'react';
import Hero from './Hero';
import ServiceList from './ServiceList';
import { services } from '@/data/services';
import { OurProcessService } from '@/components/page-partials/Services/OurProcessService';

const ServicePage = () => {
    return (
        <main className="w-full bg-white min-h-screen">
            <Hero />
            <ServiceList services={services.slice(0, 6)} />
            <OurProcessService />
            <ServiceList services={services.slice(6, 12)} />
            {/* Code auto typing website builder + experimental THREE JS */}
            {/* CTA */}
            {/* Slider of rest 12 services */}
        </main>
    );
};

export default ServicePage;
