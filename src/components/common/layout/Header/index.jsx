import { HOST } from '@/constants';
import LazyImg from '../../LazyImg';
import GradientButton from '../../gradientButton';

const Header = () => {
    return (
        <>
            <header className="tp-header-height" style={{ height: 0 }}>
                <div id="header-sticky" className="">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <a href={HOST}>
                                        <LazyImg src="assets/custom_icons/krapton-logo.webp" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="header-bottom__main-menu header-bottom__main-menu-3">
                                    <nav id="mobile-menu" style={{ display: 'block' }}>
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/services">Services</a>
                                            </li>
                                            <li>
                                                <a href="/products">Products</a>
                                            </li>
                                            <li>
                                                <a href="/blogs">Blog</a>
                                            </li>
                                            <li>
                                                <a href="/careers">Careers</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <GradientButton to="/hire-us" type="outline" className="d-none d-md-flex">
                                            Hire Us
                                        </GradientButton>
                                        <a className="header-bottom__bar tp-menu-bar d-lg-none">
                                            <i className="fal fa-bars" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
