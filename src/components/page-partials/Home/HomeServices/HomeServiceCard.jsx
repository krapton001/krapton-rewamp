import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const HomeServiceCard = ({ service, idx }) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tp-feature-five-wrapper">
                <div className={`tp-feature-five-item tp-feature-five-item-${idx + 1} text-center z-index`}>
                    <div className="tp-feature-five-icon p-relative">
                        <LazyImg src={service.iconUrl} alt={service.shortDescription} title={service.shortDescription} />
                        <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${idx + 1}`} />
                    </div>
                    <div className="tp-feature-five-content">
                        <h4 className="tp-feature-five-title-sm">{service.title}</h4>
                        <p>{service.shortDescription}</p>
                    </div>
                    {/* <div className="tp-feature-five-btn">
                        <a className="tp-btn-purple" href="service-details.html">
                            Learn More
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;
