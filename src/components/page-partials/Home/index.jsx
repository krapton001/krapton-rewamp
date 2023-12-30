import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import HomeServices from './HomeServices';
import Technologies from './Technologies';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <main className="w-full bg-white min-h-screen">
            <Hero />
            <Intro />
            <HomeServices />
            <Technologies />
            <Testimonials />
        </main>
    );
};

export default HomePage;
