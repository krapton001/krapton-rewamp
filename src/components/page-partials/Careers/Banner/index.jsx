import LazyImg from '@/components/common/LazyImg';

export default function Banner() {
    return (
        <div className="carrer-banner-area carrer-banner-space">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="carrer-banner-img-item">
                            <LazyImg src="assets/img/career/image-1.png" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="carrer-banner-img-item parallax-main">
                            <LazyImg className="parallax-img" src="assets/img/career/image-2.png.jpeg" data-parallax='{"y": 300, "smoothness": 10}' />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                        <div className="carrer-banner-img-item mb-20">
                            <LazyImg src="assets/img/career/image-3.png" />
                        </div>
                        <div className="carrer-banner-img-item">
                            <LazyImg src="assets/img/career/image-4.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
