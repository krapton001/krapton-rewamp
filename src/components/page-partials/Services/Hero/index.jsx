import HyperLink from '@/components/common/HyperLink';
import React from 'react';

const Hero = () => {
    return (
        <section className="w-full bg-black">
            <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center flex justify-center px-4 xl:px-0 py-16 lg:py-20">
                <div className="text-center">
                    <h2 className="text-primary py-2 text-5xl lg:text-8xl font-bold ">
                    Revolutionizing  <span className="text-white block">Software Development</span>
                    </h2>
                    <p className="text-gray-100 my-5 text-2xl font-light">Experience the Pinnacle of Achievement with Our Expertly Curated IT Services, Tailored for Your Success!</p>
                    <div className="flex justify-center items-center gap-x-5 mt-10">
                        <HyperLink>Get Started</HyperLink>
                        <HyperLink type="outline">Shoot a Message</HyperLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
