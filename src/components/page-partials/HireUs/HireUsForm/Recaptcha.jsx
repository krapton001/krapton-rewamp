'use client';

import GradientButton from '@/components/common/gradientButton';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = () => {
    const [btn, setBtn] = useState(true);

    const handleChange = () => {
        setBtn(false);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleChange} />
            <GradientButton type="button" id="btnsubmitrequest" className="btn btn-dark mt-4 transition-3d-hover" disabled={btn} style={{ width: '300px', height: '50px', borderRadius: '25px' }}>
                Request Proposal!
            </GradientButton>
        </div>
    );
};

export default Recaptcha;
