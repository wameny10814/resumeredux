import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'
import { addCart } from '../counter/CartSlice'
import dunut01 from '../imgs/donut01.png';
import banner from '../imgs/banner.png';
import styles from '../styles/ProductList.module.css'

function ProductList() {
    //useSelector 取值;useDispatch設定值
    const count = useSelector(state => state.counter.value)
    const cartTotal = useSelector(state => state.cartTotal.value)
    
    const FakeData = [
        {
            "name": "原味波堤",
            "price": "40",
            "key":"a01",
        },
        {
            "name": "焦糖波堤",
            "price": "40",
            "key":"a02",
        }, {
            "name": "草莓波堤",
            "price": "40",
            "key":"a03",
        }, {
            "name": "焦糖巧克力波堤",
            "price": "50",
            "key":"a04",
        }, {
            "name": "蜜糖波堤",
            "price": "40",
            "key":"a05",
        }, {
            "name": "優格波堤",
            "price": "45",
            "key":"a06",
        },
    ]

    const dispatch = useDispatch()
    return (
        <>
            <div className={styles.bannerSec}>
                <img className={styles.bannerimg} src={banner}></img>
            </div>
            <div className={styles.ProducFlex}>
                {FakeData.map((v, i) => {
                    return (
                        <>
                            <div key={v.key} className={styles.ProducSec}>
                                <div className={styles.ProductimgSec}>
                                    <img src={dunut01} className={styles.Productimg}></img>
                                </div>
                                <div>
                                    <p>品項: {v.name}</p>
                                    <span>價格: {v.price}</span>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(addCart())}>加入購物車</button>
                                </div>
                            </div>

                        </>
                    )
                })
                }
            </div>
         


        </>
    )
}

export default ProductList
