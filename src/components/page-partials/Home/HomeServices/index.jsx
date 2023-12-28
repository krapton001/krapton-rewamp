import React, { Fragment } from 'react';
import servicesData from '../../../../data/services.json';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const { services = [] } = servicesData;

    const renderCards = () => {
        return services.map((service, idx) => (
            <Fragment key={idx}>
                <HomeServiceCard idx={idx} service={service} />
            </Fragment>
        ));
    };

    return (
        <div className="tp-feature-area grey-bg-3 pt-70 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-feature-five-section-box text-center mb-40">
                            <h3 className=" text-black text-title">Elevate Your Experience with Our Premium Services</h3>
                            <p>Take your business to the next level with Excellence in Service with Unmatched Quality and Reliability</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 tp-feature-five-wrapper-main">{renderCards()}</div>
            </div>
        </div>
    );
};

export default HomeServices;
