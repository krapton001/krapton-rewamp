import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const FourOhFour = () => {
    return (
        <main>
            <div className="tp-error-area tp-error-ptb p-relative">
                <div className="tp-error-left-shape">
                    <LazyImg src="assets/img/login/error-shape.png" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-error-content-box text-center mb-40">
                                <LazyImg src="assets/img/login/text-404.png" />
                            </div>
                            <div className="tp-error-text-box text-center">
                                <h4 className="error-title-sm">Oops.! Page Not Found!</h4>
                                <p>The page you are looking for does not exist'</p>
                                <a className="tp-btn-inner tp-btn-hover alt-color-black" href="/">
                                    <span> Back To Home</span>
                                    <b />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FourOhFour;
