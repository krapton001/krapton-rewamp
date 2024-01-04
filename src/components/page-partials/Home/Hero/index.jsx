import HyperLink from '@/components/common/HyperLink';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import React from 'react';
const Background = dynamic(() => import('../../../common/GradientBg').then((mod) => mod.backgroundHero));
const Hero = () => {
    return (
        <section className="w-full">
            <Background />
            <div className="max-w-7xl z-10 relative mx-auto lg:min-h-[90vh] items-center  flex flex-col-reverse lg:flex-row  px-4 xl:px-0 py-16 lg:py-20">
                <div className="">
                    {/* <div className="relative flex items-center  gap-x-2 w-fit  text-center rounded-full mb-6 px-4 py-1 text-sm leading-6  ring-1 ring-gray-500">
                        <p className="flex text-xl font-normal  bg-clip-text text-gray-950 items-center gap-x-1">Transforming Creative Visions</p>
                    </div> */}
                    <h2 className="bg-gradient py-2 text-5xl lg:text-8xl font-bold ">
                        Crafting Visionary Ideas <span className="text-black block">into Digital Realities</span>
                    </h2>
                    <p className="text-gray-600 text-lg lg:text-3xl font-light mt-8">
                        Reliable IT Services to Power Your Business Success, Expertise in software, web app, and mobile app development that drives results.
                    </p>

                    <div className="flex gap-x-3 mt-8">
                        <HyperLink fontSize="md" title={'hire us'} href={'/hire-us'}>
                            Let's Talk
                        </HyperLink>

                        <HyperLink fontSize={'md'} type={'outline'} title={'our services'} href={'/services'}>
                            Our Services
                        </HyperLink>
                    </div>
                </div>
                <div className="hidden lg:flex">{/* <img src="/assets/custom_icons/Krapton_Logo_300.webp" className="w-[400px] h-[400px]" alt="icon green" title="icon green" /> */}</div>
            </div>
        </section>
    );
};

export default Hero;
