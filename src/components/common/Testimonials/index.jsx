import React from 'react';
import { DEFAULT_BG_STYLE } from '@/constants';
import ScatteredBg from '../layout/ScatteredBg';

const Testimonials = () => {
    return (
        <div className="tp-testimonial-area pt-130 pb-130 fix" data-background="assets/img/testimonial/testi-bg-5-1.jpg" style={{ ...DEFAULT_BG_STYLE }}>
            <ScatteredBg height="400px" right="10%" width="400px" />
            <div className="container">
                <div className="row align-items-end tp-testimonial-five-section-space">
                    <div className="col-md-8">
                        <div className="tp-testimonial-five-section-box">
                            <span className="tp-section-subtitle-5">CLIENTS &amp; PROJECTS</span>
                            <h3 className="tp-section-title-5">
                                About Customer <span>Stories</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                            <div className="test-next" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-26fde1bbb104c5bdb">
                                <button>
                                    <i className="far fa-arrow-left" />
                                </button>
                            </div>
                            <div className="test-prev" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-26fde1bbb104c5bdb">
                                <button>
                                    <i className="far fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-12">
                        <div className="tp-testimonial-five-slider-section">
                            <div className="swiper-container testimonial-five-slider-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                <div
                                    className="swiper-wrapper"
                                    id="swiper-wrapper-26fde1bbb104c5bdb"
                                    aria-live="polite"
                                    style={{ transform: 'translate3d(-2470px, 0px, 0px)', transitionDuration: '0ms' }}
                                >
                                    <div
                                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                        data-swiper-slide-index={1}
                                        role="group"
                                        aria-label="1 / 13"
                                        style={{ width: '587.5px', marginRight: 30 }}
                                    >
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-2.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Steven G.</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-1.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} role="group" aria-label="2 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-3.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Gary M. Adams</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} role="group" aria-label="3 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Edward G. Hall</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                        data-swiper-slide-index={4}
                                        role="group"
                                        aria-label="4 / 13"
                                        style={{ width: '587.5px', marginRight: 30 }}
                                    >
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-1.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Erma P. Brown</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} role="group" aria-label="5 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Joann J.</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} role="group" aria-label="6 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-2.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Steven G.</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-1.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index={2} role="group" aria-label="7 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-3.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Gary M. Adams</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index={3} role="group" aria-label="8 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Edward G. Hall</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-duplicate-prev"
                                        data-swiper-slide-index={4}
                                        role="group"
                                        aria-label="9 / 13"
                                        style={{ width: '587.5px', marginRight: 30 }}
                                    >
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-1.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Erma P. Brown</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                        data-swiper-slide-index={0}
                                        role="group"
                                        aria-label="10 / 13"
                                        style={{ width: '587.5px', marginRight: 30 }}
                                    >
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Joann J.</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-2.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                        data-swiper-slide-index={1}
                                        role="group"
                                        aria-label="11 / 13"
                                        style={{ width: '587.5px', marginRight: 30 }}
                                    >
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-2.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Steven G.</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-1.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} role="group" aria-label="12 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-3.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Gary M. Adams</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} role="group" aria-label="13 / 13" style={{ width: '587.5px', marginRight: 30 }}>
                                        <div className="tp-testimonial-five-item">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <img src="assets/img/testimonial/testi-icon-5-4.png" alt />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h4>Edward G. Hall</h4>
                                                        <span>Community Organiser</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    <img src="assets/img/testimonial/testi-logo-5-3.png" alt />
                                                </div>
                                            </div>
                                            <div className="tp-testimonial-five-content">
                                                <p>
                                                    “ This is really awesome. many small businessmen are suffering from this service in different platform and the lovers are always looking this kind
                                                    of feature on their own website. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                            </div>
                            <div className="tp-scrollbar">
                                <div className="swiper-scrollbar-drag" style={{ transform: 'translate3d(222.369px, 0px, 0px)', width: '219.669px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
