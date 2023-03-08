import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CartTable from './CartTable'
import styles from '../styles/Cart.module.css';


function Cart() {
    const Data = useSelector(state => state.cartTotal.value)
    const DataWithoutIniT = Data.filter((data) => data.key !== 0)
    // useEffect(() => {
    //     let totalPrice = DataWithoutIniT.map((data)=>data.total).reduce((a,b)=>a+b)
    //     console.log('totalPrice',totalPrice)

    // }, [Data])
    return (
        <div className={styles.cartSec}>
            <div className={styles.title}>
                <h3>購物車清單</h3>
            </div>
            <CartTable></CartTable>
            {DataWithoutIniT.length===0?null:(
                <div className={styles.totalSec}>
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
                        <span className={styles.totalDetail}>{DataWithoutIniT.length===0 ? null : DataWithoutIniT.map((data) => data.total*1).reduce((a, b) => a + b)} 元</span>
                    </div>
                </div>
            </div>

            )}
    

        </div>
    )
}

export default Cart
