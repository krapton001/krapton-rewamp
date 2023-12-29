import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import HomeServices from './HomeServices';
import Technologies from './Technologies';

const HomePage = () => {
    return (
        <main className="w-full bg-white min-h-screen">
            <Hero />
            <Intro />
            <HomeServices />
            <Technologies />
        </main>
    );
};

export default HomePage;
