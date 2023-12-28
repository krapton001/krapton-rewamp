import CodeTypingComponent from '@/components/common/animation/CodeTyping';
import ScatteredBg from '@/components/common/layout/ScatteredBg';
import { APP_TITLE } from '@/constants';
import React from 'react';
import { backendCode, frontendCode } from './constant';

const AppDevelopmentCode = () => {
    return (
        <div className="ab-company-area pt-10 pb-20" style={{ zIndex: '9' }}>
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
                <div className="row ab-company-section-space">
                    <div className="col-xl-6">
                        <div className="ab-company-section-box">
                            <h3>Frontend</h3>
                            <CodeTypingComponent code={frontendCode} />
                        </div>
                    </div>
                    <div
                        className="col-xl-6 wow tpfadeRight"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                        style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.5s', animationName: 'tpfadeRight' }}
                    >
                        <div className="ab-company-right">
                            <h3>Backend</h3>
                            <CodeTypingComponent code={backendCode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDevelopmentCode;
