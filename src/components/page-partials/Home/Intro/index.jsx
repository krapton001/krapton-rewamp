import React from 'react';
import WebsiteBuilder from './WebsiteBuilder';

const Intro = () => {
    return (
        <section className="flex items-center bg-darker py-20">
            <div className="max-w-7xl mx-auto min-h-[90vh] justify-center flex flex-col">
                <h3 className="text-white text-center mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold">
                    Krapton Transforming <span className="text-primary block">Challenges into Revolutionary Innovations</span>
                </h3>
                <p className="text-gray-300 font-poppins  text-center text-lg mb-20 lg:px-20">
                    Krapton stands at the forefront of innovation, redefining the very essence of progress with each stride it takes. This isn't just a company; it's a beacon of transformative power,
                    turning daunting challenges into groundbreaking innovations
                </p>
                <WebsiteBuilder />
            </div>
        </section>
    );
};

export default Intro;

// <section className="w-full">
//     {/* <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center  flex flex-col-reverse lg:flex-row  px-4 xl:px-0 py-16 lg:py-20"></div> */}
// </section>
