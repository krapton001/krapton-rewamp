import React from 'react';

const backendWeb = [
    {
        spanText: 'Adonis JS',
        imgAlt: 'adonis js ',
        imgSrc: 'assets/processImages/icon-adonis.png',
        cardContent: 'A fully featured web framework on Node.js',
    },
    {
        spanText: 'Express JS',
        imgAlt: 'express js',
        imgSrc: 'assets/processImages/icon-express.png',
        cardContent: 'Fast, unopinionated, minimalist web framework for Node.js',
    },
    {
        spanText: 'Laravel',
        imgAlt: 'laravel image',
        imgSrc: 'assets/processImages/icon-laravel.png',
        cardContent: 'Laravel is a web application framework for backend development.',
    },
];

const frontendWeb = [
    {
        spanText: 'Next JS',
        imgAlt: 'Next JS icon',
        imgSrc: 'assets/processImages/icon-next.png',
        cardContent: 'Next.js enables you to create full-stack Web applications ',
    },
    {
        spanText: 'Angular',
        imgAlt: 'Angular Icon',
        imgSrc: 'assets/processImages/icon-vue.png',
        cardContent: 'Angular lets you start small and supports you as your team and apps grow.',
    },
    {
        spanText: 'Vue JS',
        imgAlt: 'Vue JS Icon',
        imgSrc: 'assets/processImages/icon-vue.png',
        cardContent: 'The progressive Javascript Frontend framework.',
    },
    {
        spanText: 'Nuxt JS',
        imgAlt: 'Nuxt JS icon',
        imgSrc: 'assets/processImages/icon-nuxt.png',
        cardContent: 'The Intuitive VueJs Framework for Frontend Development.',
    },
    {
        spanText: 'React JS',
        imgAlt: 'React JS icon',
        imgSrc: 'assets/processImages/icon-react.png',
        cardContent: 'A Javascript library for building frontend user interfaces.',
    },
];

const database = [
    {
        spanText: 'MySQL',
        imgAlt: 'MySQL',
        imgSrc: 'assets/processImages/icon-mysql.png',
        cardContent: "The world's most popular open source database.",
    },
    {
        spanText: 'Rethink DB',
        imgAlt: 'Rethink DB',
        imgSrc: 'assets/processImages/icon-rethinkdb.png',
        cardContent: 'The open-source database for the real-time Web.',
    },
    {
        spanText: 'Mongo DB',
        imgAlt: 'Mongo DB',
        imgSrc: 'assets/processImages/icon-mongodb.png',
        cardContent: 'Fast reliable schema-less database.',
    },
    {
        spanText: 'Fauna DB',
        imgAlt: 'Fauna DB',
        imgSrc: 'assets/processImages/icon-faunadb.png',
        cardContent: 'A distributed document-relational database delivered as a cloud API.',
    },
    {
        spanText: 'Firebase',
        imgAlt: 'Firebase',
        imgSrc: 'assets/processImages/icon-firebase.png',
        cardContent: 'Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.',
    },
    {
        spanText: 'Supabase',
        imgAlt: 'Supabase',
        imgSrc: 'assets/processImages/icon-supabase.png',
        cardContent:
            'Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.',
    },
];

const apiWeb = [
    {
        spanText: 'Fastify',
        imgAlt: 'Fastify',
        imgSrc: 'assets/processImages/icon-fastify.png',
        cardContent: 'Fast and low overhead API development framework, for Node.js',
    },
    {
        spanText: 'Restify',
        imgAlt: 'Restify',
        imgSrc: 'assets/processImages/icon-restify.png',
        cardContent: 'The future of Node.js Rest development.',
    },
    {
        spanText: 'Express JS',
        imgAlt: 'Express JS',
        imgSrc: 'assets/processImages/icon-express.png',
        cardContent: 'Fast, unopinionated, minimalist web framework for Node.js',
    },
    {
        spanText: 'Lumen',
        imgAlt: 'Lumen',
        imgSrc: 'assets/processImages/icon-lumen.png',
        cardContent: 'A microframework by Laravel for API development.',
    },
    {
        spanText: 'Koa.js',
        imgAlt: 'Koa.js',
        imgSrc: 'assets/processImages/icon-koa.png',
        cardContent: 'Next Generation web framework for Node.js',
    },
    {
        spanText: 'Hapi.js',
        imgAlt: 'Hapi.js',
        imgSrc: 'assets/processImages/icon-hapi.png',
        cardContent: 'The Simple, secure framework developers trust.',
    },
];

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
                        <h5 className="text-center -mt-2 text-white font-bold text-3xl mb-10">Web</h5>
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tr-none rounded-br-none border-r-0 h-[190px] w-[210px] top-[24px] left-[30px] absolute">
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
                                                    <li
                                                        key={li.spanText}
                                                        className="group flex items-center  bg-[#dfeffc] border-t-[1px] border-t-[#fafcfe] border-b-[1px] hover:bg-white border-b-[#d8d9fb] text-[#2e6ad6] p-3 lg:pl-5 xl:pl-8  transition duration-500"
                                                    >
                                                        <div className="flex text-base lg:text-lg xl:text-xl font-semibold justify-center text-center">
                                                            <img alt={li.imgAlt} className="mr-5" src={li.imgSrc} /> <span>{li.spanText}</span>
                                                        </div>
                                                        <div className="hidden absolute left-[100%] group-hover:flex  transform translate-x-5 w-[275px] z-50">
                                                            <div className="bg-[#7957d5] rounded-md shadow-none relative">
                                                                <div className="p-2 text-white">
                                                                    <p>{li.cardContent}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
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
                                                    <li
                                                        key={li.spanText}
                                                        className="group flex items-center  bg-[#dfeffc] border-t-[1px] border-t-[#fafcfe] border-b-[1px] border-b-[#d8d9fb] text-[#2e6ad6] p-3 lg:pl-5 xl:pl-8 hover:bg-white  transition duration-500"
                                                    >
                                                        <div className="flex text-base lg:text-lg xl:text-xl font-semibold justify-center text-center">
                                                            <img alt={li.imgAlt} className="mr-5 w-[30px] h-[30px] object-contain" src={li.imgSrc} /> <span>{li.spanText}</span>
                                                        </div>
                                                        <div className="hidden absolute left-[100%] group-hover:flex  transform translate-x-5 w-[275px] z-50">
                                                            <div className="bg-[#7957d5] rounded-md shadow-none relative">
                                                                <div className="p-2 text-white">
                                                                    <p>{li.cardContent}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
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
                                                    <li
                                                        key={li.spanText}
                                                        className="group flex items-center  bg-[#dfeffc] border-t-[1px] border-t-[#fafcfe] border-b-[1px] border-b-[#d8d9fb] text-[#2e6ad6] p-3 lg:pl-5 xl:pl-8 hover:bg-white  transition duration-500"
                                                    >
                                                        <div className="flex text-base lg:text-lg xl:text-xl font-semibold justify-center text-center">
                                                            <img alt={li.imgAlt} className="mr-5 w-[30px] h-[30px] object-contain" src={li.imgSrc} /> <span>{li.spanText}</span>
                                                        </div>
                                                        <div className="hidden absolute left-[100%] group-hover:flex  transform translate-x-5 w-[275px] z-50">
                                                            <div className="bg-[#7957d5] rounded-md shadow-none relative">
                                                                <div className="p-2 text-white">
                                                                    <p>{li.cardContent}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
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
                                                <li
                                                    key={li.spanText}
                                                    className="group flex items-center  bg-[#dfeffc] border-t-[1px] border-t-[#fafcfe] border-b-[1px] border-b-[#d8d9fb] text-[#2e6ad6] p-3 lg:pl-5 xl:pl-8 hover:bg-white  transition duration-500"
                                                >
                                                    <div className="flex text-base lg:text-lg xl:text-xl font-semibold justify-center text-center">
                                                        <img alt={li.imgAlt} className="mr-5 w-[30px] h-[30px] object-contain" src={li.imgSrc} /> <span>{li.spanText}</span>
                                                    </div>
                                                    <div className="hidden absolute left-[100%] group-hover:flex  transform translate-x-5 w-[275px] z-50">
                                                        <div className="bg-[#7957d5] rounded-md shadow-none relative">
                                                            <div className="p-2 text-white">
                                                                <p>{li.cardContent}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
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
                        <div className="border-4 border-dashed border-primary rounded-[30px] rounded-tl-none rounded-bl-none border-l-0 h-[190px] w-[160px] top-[24px] right-[80px] absolute">
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
                        <div className="columns is-multiline is-mobile is-centered is-justify-content-space-evenly is-relative">
                            <div className="has-dashed-border border-6" />
                            <div className="column is-5">
                                <h6 className="has-margin-bottom-10 has-text-centered has-text-blue title is-6">iOS</h6>
                                <div className="card">
                                    <div className="card-content">
                                        <ul className="is-paddingless">
                                            <li>
                                                <a>
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-swift.png" /> <span>Swift</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>The official language for iOS mobile app development.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6-touch is-5-desktop">
                                <h6 className="has-margin-bottom-10 has-text-centered has-text-blue title is-6">ANDROID</h6>
                                <div className="card has-margin-bottom-50">
                                    <div className="card-content">
                                        <ul className="is-paddingless">
                                            <li>
                                                <a>
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-dart.png" /> <span>Dart</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Dart is a client-optimized language for fast apps.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a>
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-kotlin.png" /> <span>Kotlin</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>A modern programming language with multiplatform support.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6-touch is-5-desktop hybrid-tech">
                                <h6 className="has-margin-bottom-10 has-text-centered has-text-blue title is-6">Hybrid Apps Tech Stack</h6>
                                <div className="card">
                                    <div className="card-content">
                                        <ul className="is-paddingless">
                                            <li>
                                                <a href="/technologies/mobility/flutter-app-development">
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-flutter.png" /> <span>Flutter</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Build mobile apps for Android &amp; iOS with single code base.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="/technologies/mobility/ionic-app-development">
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-iconic.png" /> <span>Ionic</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Build apps with one codebase for many platforms.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="/technologies/mobility/reactnative-app-development">
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-reactnative.png" /> <span>React Native</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Create native apps for Android and iOS using React.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scroll-div" className="column is-12 is-relative automation-testing connection-border">
                        <div className="columns is-align-items-center is-centered">
                            <div className="column is-10 is-relative has-tooltip-right">
                                <div className="card">
                                    <div className="card-content">
                                        <ul className="is-paddingless">
                                            <li>
                                                <a href="/technologies/frameworks/webdriverio-testing-services">
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-webdriver.png" /> <span>WebDriverIO</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Next-gen browser and mobile automation test framework for Node.js</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a>
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-nightwatch.png" /> <span>NightWatch.js</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>End-to-end automated software testing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a>
                                                    <img alt className="has-margin-right-15 lazyLoad isLoaded" src="assets/processImages/icon-laraveldusk.png" /> <span>Laravel Dusk</span>
                                                </a>
                                                <div className="tooltip-content">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <p>Laravel Dusk provides simple end-to-end testing and browser automation.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <figure className="image">
                                    <img alt src="assets/processImages/we-build-automation-testing.png" className="lazyLoad isLoaded" />
                                </figure>
                                <h5 className="title is-4 has-opacity-100">
                                    Automation <br /> Testing
                                </h5>
                            </div>
                        </div>
                        <div className="has-arrow arrow-9">
                            <img alt src="assets/processImages/icon-arrow-down.png" className="lazyLoad isLoaded" />
                        </div>
                    </div>
                    <div className="column is-12">
                        <div className="collapse">
                            <div className="collapse-trigger" />
                            <div id="contentIdForA11y2" className="collapse-content">
                                <div className="columns is-multiline is-mobile">
                                    <div className="column is-12 devops connection-border has-margin-bottom-25">
                                        <h5 className="has-text-centered has-margin-bottom-30 title is-4">DevOps</h5>
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
                                        <h5 className="has-text-centered has-margin-bottom-30 title is-4">Deployment</h5>
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
                                        <div className="columns is-centered is-multiline is-mobile is-justify-content-space-evenly is-relative">
                                            <div className="has-dashed-border border-9" />
                                            <div className="column is-6-mobile is-4-tablet is-3-desktop">
                                                <h5 className="has-text-centered has-margin-bottom-10 title is-5">Web Solutions</h5>
                                                <div className="is-relative has-tooltip-right">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <ul className="is-paddingless has-list-img">
                                                                <li>
                                                                    <a href="/services/saas-product-development">
                                                                        <span>SaaS Products</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/services/ecommerce-development">
                                                                        <span>eCommerce</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/services/mvp-development">
                                                                        <span>MVP Development</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/services/api-development">
                                                                        <span>API Development</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/services/cms-development">
                                                                        <span>Custom CMS</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/services/application-development">
                                                                        <span>Web Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>eLearning (LMS)</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <figure className="has-image-left is-hidden-touch">
                                                        <img alt src="assets/processImages/we-build-solution-icon.png" className="lazyLoad isLoaded" />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="column is-6-mobile is-4-tablet is-3-desktop">
                                                <h5 className="has-text-centered has-margin-bottom-10 title is-5">Mobile Solutions</h5>
                                                <div className="is-relative has-tooltip-right">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <ul className="is-paddingless has-list-img">
                                                                <li>
                                                                    <a>
                                                                        <span>Streaming Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>Real Time Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>Financial Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>eCommerce Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>Chat &amp; Video Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>Utility Apps</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a>
                                                                        <span>Productivity Apps</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <figure className="has-image-left is-hidden-touch">
                                                        <img alt src="assets/processImages/we-build-solution-icon.png" className="lazyLoad isLoaded" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
