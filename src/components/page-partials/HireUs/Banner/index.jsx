import React from 'react';

const Banner = () => {
    return (
        <div className="about-img-area mb-100 z-index-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="about-img about-img-height p-relative"
                            data-background="assets/img/contact/contact-banner.jpg"
                            style={{ backgroundImage: 'url("/assets/img/contact/contact-banner.jpg")' }}
                        >
                            <div className="about-img-content">
                                <h4
                                    className="about-img-title"
                                    data-parallax='{"y": 1000, "smoothness": 10}'
                                    style={{
                                        transform: 'translate3d(0px, 240.097px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                                        WebkitTransform: 'translate3d(0px, 240.097px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                                    }}
                                >
                                    <span>Why </span> <br />
                                    <span>Hire Us</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
