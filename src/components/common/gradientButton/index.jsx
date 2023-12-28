import React from 'react';
import styles from './style.module.css';

const GradientButton = ({ to = '#', children, className, disabled = false, type = 'noraml', ...props }) => {
    const isOutline = type === 'outline';

    if (disabled) {
        return (
            <button className={`${isOutline ? styles.outlineBtn : styles.gradientButton} ${className}`} {...props} disabled={disabled}>
                {children}
            </button>
        );
    }

    return (
        <a href={to} className={`${isOutline ? styles.outlineBtn : styles.gradientButton} ${className}`} {...props}>
            {children}
        </a>
    );
};

export default GradientButton;
