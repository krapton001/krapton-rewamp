import LazyImg from '@/components/common/LazyImg';

const HireUsCard = ({ quality: { title, shortDescription, iconUrl }, imgSize }) => {
    return (
        <div
            className="col-xl-4 col-lg-4 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".4s"
            style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.4s', animationName: 'tpfadeUp' }}
        >
            <div id="divtest" className="tp-feature__item">
                <div className="tp-feature__icon">{iconUrl && <LazyImg src={iconUrl} width={imgSize} />}</div>
                <h3 className="tp-feature__title-sm">{title}</h3>
                <p>{shortDescription}</p>
            </div>
        </div>
    );
};

export default HireUsCard;
