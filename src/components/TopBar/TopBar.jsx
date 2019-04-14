import React from 'react';

import styles from './TopBar.module.scss';

const TopBar = () => (
    <header className={styles.container}>
    <div className={styles.logo}>
        <img
            alt='Linkedin logo'
            className={styles.image}
            src={`${process.env.PUBLIC_URL}/assets/images/linkedin-128.png`}
        />  
    </div>
    <h1 className={styles.title}>Linkedin translator</h1>
    </header>
);

export default TopBar;
