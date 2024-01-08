import LazyImg from '@/components/common/LazyImg';
import ScatteredBg from '@/components/common/ScatteredBg';
import { technologyData } from '@/data/technologies';
import React from 'react';

const Technologies = () => {
    return (
        <section className="py-20 lg:py-56 px-4 xl:px-0 bg-darker">
            <ScatteredBg left="10%" width="30%" />
            <div className="mx-auto max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center bscontainer">
                <div className="z-10">
                    <h3 className="text-primary mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-white">Expert in Multiple </span> Technologies with Over 1000+ Projects Completed!
                    </h3>
                    <p className="text-gray-100 text-lg font-poppins ">
                        Where Innovation Meets Imagination this exploration is not just about understanding the latest gadgets or software but about immersing oneself in the realm where creative
                        genius and technological prowess converge.
                    </p>
                </div>
                <div className="z-10">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {technologyData.map((tech, idx) => (
                            <div key={`skill-${idx}`} className="bg-white p-2 border border-gray rounded-2xl overflow-hidden w-14 h-14 lg:w-20 lg:h-20 shadow-lg">
                                <LazyImg loading="lazy" className="object-contain" alt={tech.title} title={tech.title} src={tech.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
