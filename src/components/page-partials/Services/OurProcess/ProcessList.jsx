import React from 'react';

const ProcessList = ({ imgAlt, imgSrc, spanText, cardContent }) => {
    return (
        <li className="group flex items-center  bg-[#dfeffc] border-t-[1px] border-t-[#fafcfe] border-b-[1px] hover:bg-white border-b-[#d8d9fb] text-[#2e6ad6] p-3 lg:pl-5 xl:pl-8  transition duration-500">
            <div className="flex text-base lg:text-lg xl:text-xl font-semibold justify-center text-center">
                <img alt={imgAlt} className="mr-5" src={imgSrc} /> <span>{spanText}</span>
            </div>
            <div className="hidden absolute left-[100%] group-hover:flex  transform translate-x-5 w-[275px] z-50">
                <div className="bg-[#7957d5] rounded-md shadow-none relative">
                    <div className="p-2 text-white">
                        <p>{cardContent}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProcessList;
