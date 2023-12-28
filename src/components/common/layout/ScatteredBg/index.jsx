import React from 'react';

const ScatteredBg = ({
    background = 'linear-gradient(180.21deg, #FFF9F9 -64.58%, rgba(255, 255, 255, 0.1) 115.31%), linear-gradient(90deg, #FFC368 0%, #D569E1 50%, #4164E1 100%)',
    filter = 'blur(150px)',
    position = 'absolute',
    height = '200px',
    width = '200px',
    zIndex = '1',
    ...props
}) => {
    const styles = { background, filter, position, height, width, zIndex, ...(props || {}) };
    return <div style={styles}></div>;
};

export default ScatteredBg;
