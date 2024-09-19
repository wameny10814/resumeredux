import React from 'react'
import { useEffect, useState,useContext } from 'react';
import styles from './styles/Nav.module.css';
import heart from '../features/imgs/heart.svg'
import arrowLeft from '../features/imgs/arrowLeft.svg'
import arrowRight from '../features/imgs/arrowRight.svg'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import home from '../features/imgs/home.svg'
import homelogo from '../features/imgs/homelogo.svg'
import AuthContext from '../features/MeberPage/AuthContext';
import AdminAuthContext from '../features/MeberPage/AuthConextProvider';



function Nav() {
    const Data = useSelector(state => state.cartTotal.value)
    const [DataChange, setDataChange] = useState(false);
    const { authorized, logout } = useContext(AuthContext);
    const Author = (props) => {
        const authorized = props.authorized;
        if(authorized == true){
            return (
                <>  
                    <div className={styles.navLink}>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowLeft}></img>
                        </div>
                        <div  onClick={() => {logout()}} className={styles.navListItem}>登出</div>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowRight}></img>
                        </div>

                    </div>
                </>
            )
            
        }else{
            return (
                <>
                    <div className={styles.navLink}>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowLeft}></img>
                        </div>
                        <Link to="/Login">
                            <p className={styles.navListItem}>登入</p>
                        </Link>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowRight}></img>
                        </div>
                    </div>
                </>
            )
        }
    }
    useEffect(() => {
        setDataChange(true)
        console.log('datachanged')
    }, [Data])

    return (
        <div className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.navLink}>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowLeft}></img>
                    </div>
                    <Link to="/ProductList" >
                        <p className={styles.navListItem}>
                            產品列表</p>
                    </Link>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowRight}></img>
                    </div>
                </div>
                <div className={styles.navLink}>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowLeft}></img>
                    </div>
                    <Link to="/Cart">
                        <div className={styles.navListItem}>
                            <span className={styles.navCart}>購物車
                                <span className={styles.navCartCount}>{Data.length * 1 - 1 === 0 ? <p style={{ width: '25px' }}></p> : <span>{Data.length * 1 - 1}</span>}</span>
                            </span>
                        </div>
                    </Link>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowRight}></img>
                    </div>
                </div>
            
                <div className={styles.navLink}>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowLeft}></img>
                    </div>
                    <Link to="/Contactus">
                        <p href='#' className={styles.navListItem}>聯絡我們</p>
                    </Link>
                    <div className={styles.navArrorLeft}>
                        <img src={arrowRight}></img>
                    </div>
                </div>
                {/* <div className={styles.navLink}>
                    <Link to="/linepayconfirm" >
                        <p className={styles.navListItem}>
                            linepay</p>
                    </Link>
                </div> */}
                {
                    authorized == true ? (
                        <div className={styles.navLink}>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowLeft}></img>
                        </div>
                        <Link to="/MemberCenter">
                            <p className={styles.navListItem}>會員專區</p>
                        </Link>
                        <div className={styles.navArrorLeft}>
                            <img src={arrowRight}></img>
                        </div>
                    </div>
                        
                    ):''
                }
                <div className={styles.navLink}> 
                    <Author authorized={authorized}/>
                </div>
            </div>
            

            <Link to="/resumeredux" className={styles.homelogo}>
                <img className={styles.homeimg} src={homelogo}></img>
            </Link>
            

        </div>
    )
}

export default Nav
