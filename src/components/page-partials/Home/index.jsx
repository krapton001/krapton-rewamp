import Testimonials from '@/components/common/Testimonials';
import AboutCompany from './AboutCompany';
import Hero from './Hero';
import TechStack from '../../common/TechStack';
import HomeServices from './HomeServices';
import WhyChooseUs from './WhyChooseUs';
import FeaturedHome from './FeaturedHome';

const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutCompany />
            <HomeServices />
            <TechStack />
            <WhyChooseUs />
            <FeaturedHome />
            <Testimonials />
        </>
    );
};

export default HomePage;
