import React from 'react';

const ScatteredBg = ({ filter = 'blur(150px)', position = 'absolute', height = '200px', width = '200px', zIndex = '1', ...props }) => {
    const styles = { filter, position, height, width, zIndex, ...(props || {}) };
    return <div className="sctrd-bg" style={styles}></div>;
};

export default ScatteredBg;
