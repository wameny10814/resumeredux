import React from 'react'
import { useEffect, useState } from 'react';
import styles from './styles/Nav.module.css';
import heart from '../features/imgs/heart.svg'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function Nav() {
    // const cartTotal = useSelector(state => state.cartTotal.value)
    const Data = useSelector(state => state.cartTotal.value)
    const [DataChange, setDataChange] = useState(false);
    useEffect(() => {
        setDataChange(true)
    }, [Data])
    return (
        <div className={styles.nav}>
            <div>LOGO</div>
            <div className={styles.navList}>
                <Link className="nav-link" to="/Cart">
                    <div className={styles.navListItem}>購物車
                        <div>
                            {/* <div>
                       <img src={heart}></img>
                   </div> */}
                            {DataChange ? (<p>{Data.length}</p>) : (<p>0</p>)}
                        </div>
                    </div>
                </Link>
                <Link className="nav-link" to="/">
                    <div className={styles.navListItem}>商品一覽</div>
                </Link>



            </div>
        </div>
    )
}

export default Nav
