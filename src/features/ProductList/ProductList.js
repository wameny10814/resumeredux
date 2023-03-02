import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'
import { addCart } from '../counter/CartSlice'
import dunut01 from '../imgs/donut01.png';
import banner from '../imgs/banner.png';
import styles from '../styles/ProductList.module.css'
import Data from '../DonutsData'

function ProductList() {
    //useSelector 取值;useDispatch設定值
    const count = useSelector(state => state.counter.value)
    const Data = useSelector(state => state.cartTotal.value)

    const FakeData = [
        {
            "name": "原味波堤",
            "price": "35",
            "key": "0",
        },
        {
            "name": "焦糖波堤",
            "price": "40",
            "key": "1",
        }, {
            "name": "草莓波堤",
            "price": "40",
            "key": "2",
        }, {
            "name": "焦糖巧克力波堤",
            "price": "50",
            "key": "3",
        }, {
            "name": "蜜糖波堤",
            "price": "45",
            "key": "4",
        }, {
            "name": "優格波堤",
            "price": "45",
            "key": "5",
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
                                    <button onClick={() => dispatch(addCart({
                                        name:v.name,
                                        price:v.price,
                                        key:Data[Data.length - 1].key*1+1,
                                        count:1,
                                        total:v.price,
                                        
                                    }))}>加入購物車</button>
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
