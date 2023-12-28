import React from 'react';
import Banner from './Banner';
import Platform from './Platform';
import Jobs from './Jobs';
import CallToAction from '../../common/CallToAction';
import Hero from '../../common/Hero';

const CareersPage = () => {
    const heading = (
        <>
            Build Your Career With <br /> The Lemon Team
        </>
    );
    const description = 'Work without distraction on your own or with your team.';
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main>
                    <Hero heading={heading} description={description} />
                    <Platform />
                    <Jobs />
                    <CallToAction />
                </main>
            </div>
        </div>
    );
};

export default CareersPage;
