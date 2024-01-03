import React, { Fragment } from 'react';
import { android, apiWeb, appHybrid, backendWeb, database, desktop, frontendWeb, testing } from './constant';
import ProcessList from './ProcessList';

const OurProcess = () => {
    return (
        <section className="bg-darker w-full">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="py-10 text-center">
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Agile Software
                        <span className="text-primary"> Development</span>
                    </h2>
                    <p className="text-white text-lg mt-5 lg:text-xl">Our processes are proven, the expertise is there and our tools are top notch.</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-between py-5 flex-wrap">
                    <div className="relative w-full xl:w-1/2 flex-none block px-0 lg:px-5 xl:px-10">
                        <h5 className="text-center -mt-2 text-white font-bold text-3xl mb-10">Web / Desktop</h5>
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tr-none rounded-br-none border-r-0 h-[190px] w-[170px] top-[10px] left-[30px] absolute">
                            <div className="top-[80px] absolute -left-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500" />
                            </div>
                        </div>
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-bl-none border-l-0 h-[335px] w-[150px] right-[60px] top-[190px] absolute">
                            <div className="top-[140px] absolute -right-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="" />
                            </div>
                        </div>

                        <figure className="flex justify-center">
                            <img alt src="assets/processImages/we-build-web.png" className="w-full h-auto z-10 relative" />
                        </figure>
                        <h6 className="text-center text-white font-bold text-3xl mt-44 px-2 bg-darker">Tech Stack</h6>
                        <div className="flex justify-evenly mt-10">
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">APPS</h6>
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
                                    <p className="has-text-vertical">BACKEND</p>
                                </div>
                                <div className="relative">
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

                                    <p className="has-text-vertical">FRONTEND</p>
                                </div>
                                <div className="relative">
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

                                    <p className="has-text-vertical">DATABASE</p>
                                </div>
                            </div>
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">API</h6>
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
                                    <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">Desktop</h6>
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
                        <div className="has-dashed-border border-7 is-hidden-touch">
                            <div className="has-arrow arrow-7">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="lazyLoad isLoaded" />
                            </div>
                            <div className="has-arrow arrow-8">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="lazyLoad isLoaded" />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full xl:w-1/2 flex-none block px-10">
                        <h5 className="text-center -mt-2 text-white font-bold text-3xl mb-10">Mobile</h5>
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-bl-none border-l-0 h-[190px] w-[160px] top-[10px] right-[80px] absolute">
                            <div className="left-[60px] absolute -bottom-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 rotate-90" />
                            </div>
                        </div>
                        <div className="border-4 border-dashed border-primary rounded-[25px] rounded-tl-none rounded-bl-none border-l-0 h-[140px] w-[160px] top-[380px] right-[80px] absolute">
                            <div className="top-[50px] absolute -right-[15px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500" />
                            </div>
                        </div>
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tr-none rounded-br-none rounded-bl-none border-r-0 border-b-0 h-[150px] w-[160px] top-[320px] left-[80px] absolute">
                            <div className="-top-[15px] absolute left-[60px]">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="rounded-full bg-primaryDark border border-gray-500 rotate-90" />
                            </div>
                        </div>
                        <div className="absolute top-[400px] left-10">
                            <img alt src="assets/processImages/we-build-mobile-dart.png" className="h-[96px] w-[96px] object-contain" />
                        </div>
                        <div className="absolute right-8">
                            <img alt src="assets/processImages/we-build-mobile-swift.png" className="h-[96px] w-[96px] object-contain" />
                        </div>

                        <figure className="flex justify-center">
                            <img src="assets/processImages/we-build-mobile.png" className=" w-[250px] h-[400px] object-contain z-10 relative" />
                        </figure>
                        <h6 className="text-center text-white font-bold text-3xl mt-8 px-2 bg-darker">Tech Stack</h6>
                        <div className="flex justify-evenly flex-wrap mt-10">
                            <div className="has-dashed-border border-6" />
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">iOS</h6>
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
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">ANDROID</h6>
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
                            <div className="flex-none w-[45%] xl:w-[40%]">
                                <h6 className="mb-5 text-center text-gray-200 text-xl font-bold">Hybrid Apps Tech Stack</h6>
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
                    <div id="scroll-div" className="relative flex w-full mt-10">
                        <div className="flex relative w-full justify-center h-[440px]">
                            <div className="flex self-center  z-10 relative px-20 w-full lg:w-1/2">
                                <div className="list-border-rounded border border-[#98b7fa96] shadow-sm  shadow-[#98b7fa96] hover:shadow-processCard transition-shadow ease-in duration-300 rounded-xl">
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
                            <div className="w-full lg:w-1/2">
                                <h5 className="text-white font-bold text-3xl mt-8 px-2 ">
                                    Automation <br /> Testing
                                </h5>
                            </div>

                            <figure className="absolute w-full h-full">
                                <img alt src="assets/processImages/we-build-automation-testing.png" className="w-full  object-contain" />
                            </figure>
                        </div>

                        <div className="has-arrow arrow-9">
                            <img alt src="assets/processImages/icon-arrow-down.png" className="lazyLoad isLoaded" />
                        </div>
                    </div>
                    <div className="">
                        <div className="column is-12 devops connection-border has-margin-bottom-25">
                            <h5 className="text-center text-white font-bold text-3xl mt-8 px-2 bg-darker">DevOps</h5>
                            <div className="columns is-centered is-multiline is-mobile is-justify-content-space-evenly">
                                <div className="column is-full-touch is-6-desktop is-flex is-justify-content-space-around has-text-centered connection-border-horizontal">
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-github.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>GitHub</small>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-gitlab.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>GitLab</small>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-bit-bucket.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>Bitbucket</small>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="has-arrow arrow-10">
                                <img alt src="assets/processImages/icon-arrow-down.png" className="lazyLoad isLoaded" />
                            </div>
                        </div>
                        <div className="column is-12 deployment">
                            <h5 className="text-center text-white font-bold text-3xl mt-8 px-2 bg-darker">Deployment</h5>
                            <div className="columns is-centered is-multiline is-mobile is-justify-content-space-evenly has-margin-bottom-90">
                                <div className="column is-full-touch is-6-desktop is-flex is-justify-content-space-around has-text-centered connection-border-horizontal">
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-aws.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>AWS</small>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-google-cloud.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>Google Cloud</small>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <figure className="image">
                                        <img alt src="assets/processImages/we-build-cloud-services.png" className="lazyLoad isLoaded" />
                                        <figcaption>
                                            <a>
                                                <small>Other Cloud Services</small>
                                            </a>
                                        </figcaption>
                                    </figure>
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
