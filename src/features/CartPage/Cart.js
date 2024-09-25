import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartTable from './CartTable'
import styles from '../styles/Cart.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from '../Nav'
import stylenav from '../styles/ProductDetail.module.css'


function Cart() {
    //從store拿取資料
    const Data = useSelector(state => state.cartTotal.value)
    const DataWithoutIniT = Data.filter((data) => data.id !== 0);

    
    const [scrollTop,setScrollerTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollerTop(scrollTop / 100);
            console.log('scrollTop',scrollTop/100 + '%');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // 清理事件監聽器
        }
    }, [])

    const changeclassname = function(){
        if(scrollTop ===0){
            return stylenav.classshow0

        }else if(scrollTop >0){
            
            return stylenav.classshowup
        
        }
    }
    
    return (
        <div className={styles.cartSec}>
            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            <div className={styles.title}>
                <p></p>
            </div>
            <CartTable></CartTable>
            <div className={styles.chekoutSec}>
                {DataWithoutIniT.length === 0 ? null : (
                <>   <div className={styles.totalSec}>
                        <div className={styles.totalTitle}>
                            <p>總計</p>
                        </div>
                        <div className={styles.totalDetailSec}>
                            <div className={styles.totaltitleSec}>
                                <span className={styles.totalDetailTitle}>總項目</span>
                                <span className={styles.totalDetail}>{Data.length - 1}項</span>
                            </div>
                            <div className={styles.totaltitleSec}>
                                <span className={styles.totalDetailTitle}>總金額</span>
                                <span className={styles.totalDetail}>{DataWithoutIniT.length === 0 ? null : DataWithoutIniT.map((data) => data.total * 1).reduce((a, b) => a + b)} 元</span>
                            </div>
                        </div>
                    </div>

                        
                    <div>
                        <Link to="/ReceiveForm">
                            <button className={styles.nextstep}>下一步</button>
                        </Link>
                    </div></>
                )}
            
            </div>


        </div>
    )
}

export default Cart
