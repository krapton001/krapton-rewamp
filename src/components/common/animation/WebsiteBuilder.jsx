import React from 'react';
import styles from './WebsiteBuilder.module.css';

const WebsiteBuilder = ({ code = '' }) => {
    return <div className={styles.desktopWebsite} dangerouslySetInnerHTML={{ __html: code }}></div>;
};

export default WebsiteBuilder;
