import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CartTable from './CartTable'
import styles from '../styles/Cart.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Cart() {
    //從store拿取資料
    const Data = useSelector(state => state.cartTotal.value)
    const DataWithoutIniT = Data.filter((data) => data.id !== 0)
    
    // useEffect(() => {
    //     let totalPrice = DataWithoutIniT.map((data)=>data.total).reduce((a,b)=>a+b)
    //     console.log('totalPrice',totalPrice)

    // }, [Data])

    //line pay products format
    // {
    //     amount: 1000,
    //     currency: 'TWD',
    //     orderId:'',
    //     packages: [
    //         {
    //             id: 'donuts',
    //             amount: 1000,
    //             products: [
    //                 {
    //                     "id" : "PEN-B-001",
    //                     "name" : "Pen Brown",
    //                     "imageUrl" : "https://pay-store.line.com/images/pen_brown.jpg",
    //                     "quantity" : 2,
    //                     "price" : 500
    //                 }
    //             ]
    //         }
    //     ]
    // },

   

    const checkout = () => {
        // console.log('DataWithoutIniT', DataWithoutIniT);

        let bodyformat = DataWithoutIniT;
        // console.log('bodyformat',bodyformat);
    //    delete bodyformat[0].incre;
        // fetch('http://localhost:3500/admin2/checkout', {
        //     method: 'POST',
        //     body: JSON.stringify(DataWithoutIniT),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        //     .then((r) => r.json())
        //     .then((data) => {
        //         window.location.assign(data.paymentUrl.web);
        //     })
    }

  
    
    return (
        <div className={styles.cartSec}>
            <div className={styles.title}>
                <p></p>
            </div>
            <CartTable></CartTable>
            <div className={styles.chekoutSec}>
                {DataWithoutIniT.length === 0 ? null : (
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
                                <span className={styles.totalDetail}>{DataWithoutIniT.length === 0 ? null : DataWithoutIniT.map((data) => data.total * 1).reduce((a, b) => a + b)} 元</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className={styles.checkoutBTNSec}>
                    {Data.length*1-1===0?null:(<button className={styles.checkoutBTN} onClick={checkout}>開始結帳(Linepay)</button>)}
                </div>
                <div>
                    <Link to="/ReceiveForm">
                        <p>下一步</p>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Cart
