import dynamic from 'next/dynamic';

const Background = dynamic(() => import('../../../common/GradientBg').then((mod) => mod.backgroundHero));

const Info = () => {
    return (
        <section className="w-[90vw] border-b-2 mx-auto ">
            <div className="max-w-7xl mx-auto lg:min-h-[90vh] items-center flex justify-center px-4 xl:px-0 py-16 lg:py-20">
                <div className="text-center relative ">
                    <h2 className="  py-2 font-bold text-3xl lg:text-6xl ">
                        Our values <span className="block text-5xl lg:text-8xl bg-gradient">What We're All About</span>
                    </h2>
                    <Background/>
                    <p className="text-gray-900 my-5 text-xl mt-10 leading-2 text-left font-light lg:text-2xl lg:leading-10">
                        We believe that businesses don&apos;t pay taxes, people do. We believe that businesses don&apos;t feed families, people do. We believe that managing your advertising dollars is an
                        enormous responsibility, because whether you&apos;re part of a Fortune 100 company or you&apos;re the owner of a small online boutique, the results we generate effect what you take home
                        to your family at the end of the day.When we manage your advertising dollars, we&apos;re managing them as if they were our own.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Info;


