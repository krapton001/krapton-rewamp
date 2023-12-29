import HyperLink from "@/components/common/HyperLink";
import React from "react";

const Hero = () => {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center  flex flex-col-reverse lg:flex-row  px-4 lg:px-0 py-16 lg:py-20">
                <div className="">
                    <h2 className="text-primary text-3xl lg:text-8xl font-bold ">Crafting Visionary Ideas <span className="text-black block">into Digital Realities</span></h2>
                    <p className="text-gray-600 text-lg lg:text-3xl font-medium mt-8">Reliable IT Services to Power Your Business Success, Expertise in software, web app, and mobile app development that drives results.</p>
                   
                    <div className="flex gap-x-3 mt-8">
                        <HyperLink fontSize="2xl" title={"hire us"} href={"/hire-us"}>
                            Let's Talk
                        </HyperLink>
                       
                        <HyperLink fontSize={"2xl"} type={'outline'} title={"our services"} href={"/services"}>
                            Our Services
                        </HyperLink>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    {/* <img src="/assets/custom_icons/Krapton_Logo_300.webp" className="w-[400px] h-[400px]" alt="icon green" title="icon green" /> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
