import React from 'react'
import { useEffect, useState } from 'react';
import styles from './styles/Nav.module.css';
import heart from '../features/imgs/heart.svg'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function Nav() {
    const Data = useSelector(state => state.cartTotal.value)
    const [DataChange, setDataChange] = useState(false);
    useEffect(() => {
        setDataChange(true)
    }, [Data])
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <h2>甜圈</h2>
            </div>
            <div className={styles.navList}>
                <Link className={styles.navLink} to="/Cart">
                    <div className={styles.navListItem}>
                        <span>購物車{Data.length*1-1}</span>
                    </div>
                </Link>
                <Link to="/" className={styles.navLink}>
                    <div className={styles.navListItem}>商品一覽</div>
                </Link>



            </div>
        </div>
    )
}

export default Nav
