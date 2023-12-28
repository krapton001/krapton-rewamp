import React from 'react';
import { DEFAULT_BG_STYLE } from '@/constants';
import ScatteredBg from '@/components/common/layout/ScatteredBg';

const WhyChooseUs = () => {
    return (
        <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
            <div className="container-fluid p-0">
                <div className="tp-service-five-bg" data-background="assets/img/service/service-5-1-bg.png" style={{ ...DEFAULT_BG_STYLE }} />
                <ScatteredBg height="200px" left="10%" width="200px" />
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-service-five-section-box">
                            <span className="tp-section-subtitle-5">What we Offer</span>
                            <h3 className="tp-section-title-5 pb-15">
                                Get a Live <br />
                                Look at Your <br />
                                <span>Manufacturing</span> <br />
                                <span>Business</span>
                            </h3>
                            <p className="pb-20">
                                Access the insights you need to move products and <br />
                                make decisions.
                            </p>
                            <a className="tp-btn-yellow-lg text-black" href="service-details.html">
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                        <div className="inner" />
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                        <div className="tp-service-five-icon">
                                            <img src="assets/img/service/sv-icon-5-1.png" alt />
                                        </div>
                                        <div className="tp-service-five-content">
                                            <h3 className="tp-service-five-title-sm">
                                                <a href="service-details.html">
                                                    Live Inventory <br />
                                                    Management
                                                </a>
                                            </h3>
                                            <p>Track materials and stock for outsourced purchase orders</p>
                                        </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                        <a href="service-details.html">
                                            <i className="far fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                        <div className="inner" />
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                        <div className="tp-service-five-icon">
                                            <img src="assets/img/service/sv-icon-5-2.png" alt />
                                        </div>
                                        <div className="tp-service-five-content">
                                            <h3 className="tp-service-five-title-sm">
                                                <a href="service-details.html">
                                                    Real-time Master <br />
                                                    Planning
                                                </a>
                                            </h3>
                                            <p>Track materials and stock for outsourced purchase orders</p>
                                        </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                        <a href="service-details.html">
                                            <i className="far fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                        <div className="inner" />
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                        <div className="tp-service-five-icon">
                                            <img src="assets/img/service/sv-icon-5-3.png" alt />
                                        </div>
                                        <div className="tp-service-five-content">
                                            <h3 className="tp-service-five-title-sm">
                                                <a href="service-details.html">
                                                    Easy Contract <br />
                                                    Manufacturing
                                                </a>
                                            </h3>
                                            <p>Track materials and stock for outsourced purchase orders</p>
                                        </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                        <a href="service-details.html">
                                            <i className="far fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tp-service-five-item z-index">
                                    <div className="tp-services-five-item-bg">
                                        <div className="inner" />
                                    </div>
                                    <div className="tp-service-five-wrapper">
                                        <div className="tp-service-five-icon">
                                            <img src="assets/img/service/sv-icon-5-4.png" alt />
                                        </div>
                                        <div className="tp-service-five-content">
                                            <h3 className="tp-service-five-title-sm">
                                                <a href="service-details.html">
                                                    Omnichannel <br />
                                                    Order Management
                                                </a>
                                            </h3>
                                            <p>Track materials and stock for outsourced purchase orders</p>
                                        </div>
                                    </div>
                                    <div className="tp-service-five-btn text-end">
                                        <a href="service-details.html">
                                            <i className="far fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
