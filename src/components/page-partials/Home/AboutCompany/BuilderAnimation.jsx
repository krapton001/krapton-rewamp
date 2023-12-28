'use client';
import CodeTypingComponent from '@/components/common/animation/CodeTyping';
import WebsiteBuilder from '@/components/common/animation/WebsiteBuilder';
import React, { useState } from 'react';
import { builderCode } from './constant';

const BuilderAnimation = ({ codeStr = builderCode }) => {
    const [code, setCode] = useState('');

    return (
        <div className="row ab-company-section-space">
            <div
                className="col-xl-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
                style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.5s', animationName: 'tpfadeRight' }}
            >
                <div className="ab-company-right">
                    <WebsiteBuilder code={code} />
                </div>
            </div>
            <div className="col-xl-6">
                <div className="ab-company-section-box">
                    <CodeTypingComponent code={codeStr} setCode={setCode} />
                </div>
            </div>
        </div>
    );
};

export default BuilderAnimation;

/*** _____________________________________________***/
/*** _______________LEGACY_____CODE_______________***/
/*** _____________________________________________***/

// const BuilderAnimation = () => {
//     return (
//       <div className="row ab-company-section-space">
//       <div className="col-xl-6">
//           <div className="ab-company-section-box">
//               <CodeTypingComponent />
//           </div>
//       </div>
//       <div
//           className="col-xl-6 wow tpfadeRight"
//           data-wow-duration=".9s"
//           data-wow-delay=".5s"
//           style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.5s', animationName: 'tpfadeRight' }}
//       >
//           <div className="ab-company-right">
//               <div className="ab-company-section-text">
//                   <p className="pb-10">
//                       Karpton is a leading provider of cutting-edge software development and digital services. With years of experience, we specialize in transforming your innovative
//                       ideas into scalable and dynamic digital products.
//                   </p>
//                   <p>
//                       At Karpton, we don't just create digital solutions; we breathe life into your vision. Our team of expert developers and creative thinkers are dedicated to pushing
//                       the boundaries of what's possible, turning the most complex challenges into seamless, user-centric experiences. With our finger on the pulse of the latest
//                       technological trends, we ensure that your business not only thrives in the current digital landscape but also sets the pace for the future. From harnessing the
//                       power of AI and cloud computing to leveraging cutting-edge IoT solutions, Karpton is your partner in crafting a digital journey that's not just revolutionary, but
//                       also resilient and ready for the world of tomorrow.
//                   </p>
//               </div>
//           </div>
//       </div>
//   </div>
//     )
//   }

/*** _____________________________________________***/
/*** _______________LEGACY_____CODE_______________***/
/*** _____________________________________________***/
