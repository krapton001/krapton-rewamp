import CallToAction from '@/components/common/CallToAction';
import WhyHireUs from './WhyHireUs';
import Testimonials from '@/components/common/Testimonials';
import HireUsForm from './HireUsForm';
import Hero from '@/components/common/Hero';
import TechStack from '@/components/common/TechStack';
import AppDevelopmentCode from './AppDevlopmentCode';

const HireUsPage = () => {
    const heading = 'Why Krapton should Be Your First Choice?';
    const description =
        'We excel in delivering tailored, cutting-edge technological solutions that empower your business. Our commitment to innovation and excellence sets us apart in a crowded field';
    const gradient = 'linear-gradient(180.21deg, #FFF9F9 -64.58%, rgba(255, 255, 255, 0.1) 115.31%), linear-gradient(90deg,#7bffca 0%, #FFC368 50%,#D569E1 100%)';

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main>
                    <Hero heading={heading} description={description} gradient={gradient} />
                    <WhyHireUs />
                    <AppDevelopmentCode />
                    <HireUsForm />
                    <TechStack />
                    <Testimonials />
                    <CallToAction />
                </main>
            </div>
        </div>
    );
};

export default HireUsPage;
