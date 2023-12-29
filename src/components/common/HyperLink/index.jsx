import React from 'react';

const HyperLink = ({ href, title, children, fontSize='md', type = 'normal', className = '', ...props }) => {
    const commonClassName = `rounded-lg py-2 px-4 flex items-center justify-center font-semibold gap-2  tracking-wider cursor-pointer rounded py-2 px-4 flex items-center justify-center gap-2 text-${fontSize} tracking-wider cursor-pointer `;

    /** Renders normal button */
    if (type === 'normal')
        return (
            <a href={href} title={title} className={`${commonClassName} bg-primary text-white text-sm hover:bg-primaryDark transition duration-200 ${className}`} {...props}>
                {children}
            </a>
        );

    /** Renders outline button */
    if (type === 'outline')
        return (
            <a href={href} title={title} className={`${commonClassName} border-2 border-gray-500 hover:border-primary hover:text-primary transition duration-200 text-gray-500  ${className}`} {...props}>
                {children}
            </a>
        );
};

export default HyperLink;