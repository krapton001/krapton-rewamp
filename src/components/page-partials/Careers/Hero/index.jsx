import HyperLink from '@/components/common/HyperLink';
import React from 'react';

const Hero = () => {
    return (
        <section className="w-full bg-black">
            <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center flex justify-center px-4 xl:px-0 py-16 lg:py-20">
                <div className="text-center">
                    <h2 className="text-primary py-2 text-5xl lg:text-8xl font-bold ">
                        We’re On the Lookout<span className="text-white block">For Extraordinary Talent</span>
                    </h2>
                    <p className="text-gray-100 my-5 text-2xl font-light">If you&apos;re motivated, intelligent, passionate and looking for a meaningful work environment, Codenia Technologies LLP may just be the last place you send your resume to.</p>
                    <div className="flex justify-center items-center text-2xl gap-x-5 mt-10">
                        <HyperLink>See openings</HyperLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
