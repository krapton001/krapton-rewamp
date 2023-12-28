import LazyImg from '@/components/common/LazyImg';
import React from 'react';

export const Hero = () => {
    return (
        <div className="about-banner-area p-relative">
            <div className="about-shape-1 z-index-3">
                <LazyImg src="assets/img/breadcrumb/breadcrumb-shape-1.png" />
            </div>
            <div className="about-shape-2 z-index-3">
                <LazyImg src="assets/img/breadcrumb/breadcrumb-shape-2.png" />
            </div>
            <div className="about-banner p-relative z-index fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about-banner-content">
                                <h4
                                    className="about-banner-title"
                                    data-parallax='{"y": 1000, "smoothness": 10}'
                                    style={{
                                        transform: 'translate3d(0px, 236.487px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                                        WebkitTransform: 'translate3d(0px, 236.487px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                                    }}
                                ></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
