import CodeTypingComponent from '@/components/common/animation/CodeTyping';
import ScatteredBg from '@/components/common/layout/ScatteredBg';
import { APP_TITLE } from '@/constants';
import React from 'react';
import BuilderAnimation from './BuilderAnimation';
import CareersPage from '../../Careers';

const AboutCompany = () => {
    return (
        <div className="ab-company-area pt-30 pb-100" style={{ zIndex: '9' }}>
            <ScatteredBg left="0%" height="400px" width="30%" zIndex="-1" />
            <div className="container" style={{ zIndex: '9' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-feature-five-section-box text-center mb-40">
                            <h3 className=" text-black text-title">{APP_TITLE} Transforming Challenges into Innovations</h3>
                            <p>Krapton: Redefining Progress - Transforming Challenges into Groundbreaking Innovations for a Smarter Tomorrow</p>
                        </div>
                    </div>
                </div>
                <BuilderAnimation />
            </div>
        </div>
    );
};

export default AboutCompany;
