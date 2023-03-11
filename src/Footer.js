import React from 'react'
import { json } from 'react-router-dom';
import styles from './features/styles/Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.footerwords}>
                All Rights Reserved© 恬圈
            </p>
        </div>
    )
}

export default Footer
