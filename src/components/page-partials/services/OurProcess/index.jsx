import React, { Fragment } from 'react';
import { android, apiWeb, appHybrid, backendWeb, database, desktop, frontendWeb, testing, devops, Deployment } from './constant';
import ProcessList from './ProcessList';

const OurProcess = () => {
    return (
        <section className="bg-darker w-full">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="py-10 text-center">
                    <h2 className="text-white text-xl xl:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Agile Software
                        <span className="text-primary"> Development</span>
                    </h2>
                    <p className="text-white text-lg mt-5 lg:text-xl">Our processes are proven, the expertise is there and our tools are top notch.</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-between py-5 flex-wrap">
                    <div className="relative w-full xl:w-1/2 flex-none block px-0 lg:px-5 xl:px-10">
                        <h5 className="text-center -mt-2 text-white font-bold text-xl sm:text-2xl xl:text-3xl mb-10">Web / Desktop</h5>
                        <div className="border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tr-none rounded-br-none border-r-0 md:border-r-0 h-[130px] w-[80px] xl:h-[190px] xl:w-[170px] top-[10px] left-[30px] absolute">
                            <div className="top-[50px] absolute -left-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500" />
                            </div>
                        </div>
                        <div className="border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-bl-none border-l-0 md:border-l-0  h-[180px] w-[110px] xl:h-[335px] xl:w-[150px] right-5 xl:right-[60px] top-[150px] xl:top-[190px] absolute">
                            <div className="top-[80px] xl:top-[140px] absolute -right-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="" />
                            </div>
                        </div>

                        <figure className="flex justify-center">
                            <img alt src="assets/processImages/we-build-web.png" className="w-full h-auto z-10 relative" />
                        </figure>
                        <h6 className="text-center text-white font-bold text-xl sm:text-2xl xl:text-3xl mt-20 xl:mt-44 px-2 bg-darker">Tech Stack</h6>
                        <div className="flex justify-around mt-10">
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">APPS</h6>
                                <div className="relative">
                                    <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                        <ul className="p-0 bg-transparent">
                                            {backendWeb.map((li) => {
                                                return (
                                                    <Fragment key={li.spanText}>
                                                        <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                    </Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <p className="text-primary font-bold -rotate-90 absolute top-[40%] -left-[49px]">BACKEND</p>
                                </div>
                                <div className="relative mt-5">
                                    <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                        <ul className="p-0 bg-transparent">
                                            {frontendWeb.map((li) => {
                                                return (
                                                    <Fragment key={li.spanText}>
                                                        <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                    </Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <p className="text-primary font-bold -rotate-90 absolute top-[40%] -left-[52px]">FRONTEND</p>
                                </div>
                                <div className="relative z-[2] mt-5">
                                    <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                        <ul className="p-0 bg-transparent">
                                            {database.map((li) => {
                                                return (
                                                    <Fragment key={li.spanText}>
                                                        <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                    </Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    <p className="text-primary font-bold -rotate-90 absolute top-[40%] -left-[49px]">DATABASE</p>
                                </div>
                            </div>
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">API</h6>
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                    <ul className="p-0 bg-transparent">
                                        {apiWeb.map((li) => {
                                            return (
                                                <Fragment key={li.spanText}>
                                                    <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                </Fragment>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="relative mt-10">
                                    <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">Desktop</h6>
                                    <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                        <ul className="p-0 bg-transparent">
                                            {desktop.map((li) => {
                                                return (
                                                    <Fragment key={li.spanText}>
                                                        <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                    </Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full xl:w-1/2 flex-none block px-10">
                        <h5 className="text-center mt-5 xl:-mt-2 text-white font-bold text-xl sm:text-2xl xl:text-3xl mb-10">Mobile</h5>
                        <div className="border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-bl-none border-l-0 md:border-l-0 h-[160px] xl:h-[190px]  w-[120px]  xl:w-[160px] top-[35px] xl:top-[10px] right-[30px] xl:right-[80px] absolute">
                            <div className="left-[60px] absolute -bottom-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 rotate-90" />
                            </div>
                        </div>
                        <div className="border-2 md:border-4 border-dashed border-primary rounded-[25px] rounded-tl-none rounded-bl-none border-l-0 md:border-l-0 h-[120px] w-[100px] xl:w-[160px] top-[300px] xl:top-[380px] right-[30px] xl:right-[80px] absolute">
                            <div className="top-[50px] absolute -right-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500" />
                            </div>
                        </div>
                        <div className="border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tr-none rounded-br-none rounded-bl-none border-r-0 md:border-r-0 border-b-0 md:border-b-0 h-[100px] xl:h-[150px] w-[100px] xl:w-[160px] top-[220px] xl:top-[320px] left-[45px] xl:left-[80px] absolute">
                            <div className="-top-[15px] absolute left-[20px] xl:left-[60px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 rotate-90" />
                            </div>
                        </div>
                        <div className="absolute top-[270px] left-0 xl:top-[400px] xl:left-10">
                            <img alt src="assets/processImages/we-build-mobile-dart.png" className="h-[96px] w-[96px] object-contain" />
                        </div>
                        <div className="absolute right-0 xl:right-8 top-20 xl:top-auto">
                            <img alt src="assets/processImages/we-build-mobile-swift.png" className=" h-[80px] w-[80px] xl:h-[96px] xl:w-[96px] object-contain" />
                        </div>

                        <figure className="flex justify-center">
                            <img src="assets/processImages/we-build-mobile.png" className="h-[285px] xl:w-[250px] xl:h-[400px] object-contain z-10 relative" />
                        </figure>
                        <h6 className="text-center text-white font-bold text-xl sm:text-2xl xl:text-3xl mt-8 px-2 bg-darker">Tech Stack</h6>
                        <div className="flex justify-around flex-wrap mt-10 h-[652px] xl:h-[980px] relative">
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">iOS</h6>
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                    <ul className="p-0 bg-transparent">
                                        <ProcessList
                                            spanText={'Swift'}
                                            imgAlt={'Swift Icon'}
                                            imgSrc={'assets/processImages/icon-swift.png'}
                                            cardContent="The official language for iOS mobile app development."
                                        />
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-none w-[45%] xl:w-[40%] z-[2]">
                                <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">ANDROID</h6>
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                    <ul className="p-0 bg-transparent">
                                        {android.map((li) => {
                                            return (
                                                <Fragment key={li.spanText}>
                                                    <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                </Fragment>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-tr-none border-t-0 md:border-t-0 h-28 xl:h-80 w-[150px] xl:w-[290px] top-[120px] xl:left-[25%] absolute"></div>
                            <div className="border-l-2 md:border-l-4 border-dashed border-primary h-[70px] xl:h-[220px] left-[50%] top-[230px] xl:top-[440px] absolute"></div>
                            <div className="flex-none w-[55%] xl:w-[40%] self-end mb-20 z-[2]">
                                <h6 className="mb-5 text-center text-gray-200 text-lg md:text-xl font-bold">Hybrid Apps Tech Stack</h6>
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm bg-gray-900 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
                                    <ul className="p-0 bg-transparent">
                                        {appHybrid.map((li) => {
                                            return (
                                                <Fragment key={li.spanText}>
                                                    <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                </Fragment>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scroll-div" className="relative flex w-full mt-10 h-[600px]">
                        <div className="hidden xl:flex border-2 md:border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-tr-none border-t-0 md:border-t-0 h-60 w-full xl:w-[770px] left-[15%] -top-40  absolute">
                            <div className="-left-[16px] absolute top-[140px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 " />
                            </div>
                            <div className="-right-[16px] absolute top-[140px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 " />
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row relative w-full justify-center h-[440px]">
                            <div className="flex order-3 self-center z-10 relative px-20 w-full lg:w-1/2">
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm mx-auto xl:mx-0 shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl w-full xl:w-[250px]">
                                    <ul className="p-0 bg-transparent">
                                        {testing.map((li) => {
                                            return (
                                                <Fragment key={li.spanText}>
                                                    <ProcessList spanText={li.spanText} imgAlt={li.imgAlt} imgSrc={li.imgSrc} cardContent={li.cardContent} />
                                                </Fragment>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center w-full xl:w-1/2">
                                <h5 className="text-white font-bold text-xl sm:text-2xl xl:text-3xl xl:mt-8 px-2 xl:w-[180px] bg-darker">
                                    Automation <br /> Testing
                                </h5>
                            </div>

                            <figure className="xl:absolute w-full h-full mt-5 xl:mt-0">
                                <img alt src="assets/processImages/we-build-automation-testing.png" className="w-full  object-contain" />
                            </figure>
                        </div>
                        <div className="border-l-2 xl:border-l-4 border-dashed border-primary h-[120px] left-[50%] bottom-0 xl:-bottom-20 absolute">
                            <div className="-left-[16px] absolute top-[40px] h-24 w-24">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 " />
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-full xl:mt-10">
                        <div className="relative text-center">
                            <h5 className="text-center text-white font-bold text-xl sm:text-2xl xl:text-3xl xl:mt-8 px-2 bg-darker">DevOps</h5>
                            <div className="flex justify-evenly mt-10">
                                <div className="flex justify-around w-full xl:w-[65%]">
                                    {devops.map((dev) => (
                                        <figure className="h-56 w-56">
                                            <img alt={dev.imgAlt} src={dev.imgSrc} className="lazyLoad isLoaded" />
                                            <figcaption>
                                                <a>
                                                    <small className="text-[#dfeffc] text-base md:text-lg xl:text-xl">{dev.spanText}</small>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                            <div className="border-l-2 md:border-l-4 border-dashed border-primary h-[80px] left-[50%] bottom-0 xl:-bottom-10 absolute">
                                <div className="-left-[16px] absolute top-[30px] h-24 w-24">
                                    <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 " />
                                </div>
                            </div>
                        </div>
                        <div className="relative text-center xl:mt-10">
                            <h5 className="text-center text-white font-bold text-xl sm:text-2xl xl:text-3xl xl:mt-8 px-2 bg-darker">Deployment</h5>
                            <div className="flex justify-evenly mt-10">
                                <div className="flex justify-around w-full xl:w-[65%]">
                                    {Deployment.map((dev) => (
                                        <figure className="h-56 w-56">
                                            <img alt={dev.imgAlt} src={dev.imgSrc} className="lazyLoad isLoaded" />
                                            <figcaption>
                                                <a>
                                                    <small className="text-[#dfeffc] text-base md:text-lg xl:text-xl">{dev.spanText}</small>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
