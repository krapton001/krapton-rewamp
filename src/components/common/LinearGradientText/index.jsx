import React from 'react';

const LinearGradientText = ({ children, className = '', tag = 'h2' }) => {
    if (tag === 'h1') {
        return <h1 className={`${className} linear-text`}>{children}</h1>;
    }

    if (tag === 'h2') {
        return <h2 className={`${className} linear-text`}>{children}</h2>;
    }

    if (tag === 'h3') {
        return <h3 className={`${className} linear-text`}>{children}</h3>;
    }

    if (tag === 'h4') {
        return <h4 className={`${className} linear-text`}>{children}</h4>;
    }

    if (tag === 'h5') {
        return <h5 className={`${className} linear-text`}>{children}</h5>;
    }
};

export default LinearGradientText;
