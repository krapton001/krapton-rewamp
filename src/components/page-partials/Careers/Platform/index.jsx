import LazyImg from '@/components/common/LazyImg';

export default function Platform() {
    return (
        <div className="tp-platform-area tp-platform-inner  p-relative z-index">
            <div className="container">
                <div className="row align-items-end mb-60">
                    <div className="col-xl-7 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-platform-section-box">
                            <h5 className="inner-section-subtitle pb-10">What we offer</h5>
                            <h3 className="tp-section-title">Our Platform</h3>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-platform-text">
                            <p>Explore how Avalance can help you toassess security controls continuously.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                        <div className="tp-platform-img-box">
                            <LazyImg src="assets/img/payment/platform-1.png" />
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-12">
                        <div className="row-custom-wrapper">
                            <div className="row-custom">
                                <div className="col-custom">
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                            <span>01.</span>
                                            <h4 className="tp-panel-title child-one">Firewall &amp; VPN</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                            <span>01.</span>
                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                            <p>Blocks infected website tracking programs and annoying.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                            <span>02.</span>
                                            <h4 className="tp-panel-title child-two">Hack Protection</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                            <span>02.</span>
                                            <h4 className="tp-panel-title-2">Hack Protection</h4>
                                            <p>Blocks infected website tracking programs and annoying.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom active">
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                            <span>03.</span>
                                            <h4 className="tp-panel-title child-three">Live Security</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                            <span>03.</span>
                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                            <p>Blocks infected website tracking programs and annoying.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                            <span>04.</span>
                                            <h4 className="tp-panel-title child-four">Online Support</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                            <span>04.</span>
                                            <h4 className="tp-panel-title-2">Online Support</h4>
                                            <p>Blocks infected website tracking programs and annoying.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
