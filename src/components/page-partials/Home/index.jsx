import React from 'react';
import Hero from './Hero';
import Intro from './Intro';

const HomePage = () => {
    return (
        <main className="w-full bg-white min-h-screen">
            <Hero />
            <Intro />
        </main>
    );
};

export default HomePage;
