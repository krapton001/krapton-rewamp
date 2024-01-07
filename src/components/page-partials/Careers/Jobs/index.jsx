import React from 'react';
import Joblist from './Joblist';

const JobOpenings = () => {
    return (
        <section className="w-[90vw] border-b-2 mx-auto ">
            <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center flex justify-center px-4 xl:px-0 py-16 lg:py-20">
                <div className="text-center relative ">
                    <h2 className="  py-2 font-bold text-3xl lg:text-6xl ">Open Positions</h2>

                    <p className="text-gray-900 my-5 text-2xl mt-10 leading-10 text-justify font-light p-3 pb-16 mb-2.5">Apply to one of our open positions below, or send your resume and cover letter to jobs@codeniatechnologies.com</p>
                    <Joblist />
                </div>
            </div>
        </section>
    );
};

export default JobOpenings;
