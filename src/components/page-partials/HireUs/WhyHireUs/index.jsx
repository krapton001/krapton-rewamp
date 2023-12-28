import { Fragment } from 'react';
import hireUsData from '../../../../data/hireUs.json';
import HireUsCard from './HireUsCard';
const WhyHireUs = () => {
    const { hireUs } = hireUsData;
    const renderHireUsCard = () => {
        return hireUs.map((quality, idx) => (
            <Fragment key={idx}>
                <HireUsCard quality={quality} imgSize="45px" />
            </Fragment>
        ));
    };

    return (
        <div className="contact-info-area pb-90">
            <div className="container">
                <div className="row">{renderHireUsCard()}</div>
            </div>
        </div>
    );
};

export default WhyHireUs;
