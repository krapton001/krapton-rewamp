import LazyImg from '@/components/common/LazyImg';
import LinearGradientText from '@/components/common/LinearGradientText';
import ScatteredBg from '@/components/common/layout/ScatteredBg';
//#7bffca
const defaultGradient = 'linear-gradient(180.21deg, #FFF9F9 -64.58%, rgba(255, 255, 255, 0.1) 115.31%), linear-gradient(90deg, #FFC368 0%, #D569E1 50%, #7bffca 100%)';
export default function Hero({ heading = '', description = '', gradient = defaultGradient }) {
    return (
        <div className="breadcrumb__area breadcrumb-height-2 p-relative overflow-visible">
            <ScatteredBg background={gradient} left="50%" width="50%" height="50%" />
            <div className="container">
                <div className="breadcrumb__content-wrap">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="breadcrumb__content text-center z-index-3 mb-60">
                                <LinearGradientText className="breadcrumb__title">{heading}</LinearGradientText>
                                <div className="breadcrumb__text">
                                    <p className="text-dark">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
