'use client';
import { injectScript } from '@/utils/dom-utils';
import React from 'react';

const LazyScript = ({ src }) => {
    React.useEffect(() => {
        const to = setTimeout(() => {
            injectScript(src);
        }, 2000);

        return () => {
            clearTimeout(to);
        };
    }, []);

    return;
};

export default LazyScript;
