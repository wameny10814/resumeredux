import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,plus,deduction } from '../counter/CartSlice'
// import {increment} from '../counter/counterSlice'

import dunut01 from '../imgs/donut01.png';
import chocolate from '../imgs/chocolate.png';
import soybean from '../imgs/soybean.png';
import strawberry from '../imgs/strawberry.png';
import mocha from '../imgs/mocha.png';
import whitechoco from '../imgs/whitechoco.png';
import banner from '../imgs/banner.png';
import styles from '../styles/ProductList.module.css'

import { Col, Divider, Row } from 'antd';

function ProductList() {
    //useSelector 取值;useDispatch設定值
    const count = useSelector(state => state.counter.value)
    const Data = useSelector(state => state.cartTotal.value)
    

    const FakeData = [
        {
            "name": "原味波堤",
            "price": 35,
            "id": "0",
            'src':dunut01,
        },
        {
            "name": "豆漿波堤",
            "price": 40,
            "id": "1",
            'src':soybean,
        }, {
            "name": "草莓波堤",
            "price": 40,
            "id": "2",
            'src':strawberry
        }, {
            "name": "焦糖巧克力波堤",
            "price": 50,
            "id": "3",
            'src':chocolate
        }, {
            "name": "宇治抹茶波堤",
            "price": 45,
            "id": "4",
            'src':mocha,
        }, {
            "name": "白巧克力波堤",
            "price": 45,
            "id": "5",
            'src':whitechoco,
        },
    ]

    const dispatch = useDispatch()


    return (
        <div className={styles.ProductListSec}>
            <div className={styles.bannerSec}>
                <img className={styles.bannerimg} src={banner}></img>
            </div>

            <Row gutter={[0, 24]}>
                {FakeData.map((v, i) => {
                    return (

                        <Col span={8}>
                            <div key={v.id} className={styles.ProducSec} >
                                <div className={styles.ProductimgSec}>
                                    <img src={v.src} className={styles.Productimg}></img>
                                </div>
                                <div className={styles.ProducDetail}>
                                    <p>品項: {v.name}</p>
                                    <p>價格: {v.price}</p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <button className={styles.addtoCart} onClick={() => dispatch(addCart({
                                        name: v.name,
                                        price: v.price,
                                        id: Data[Data.length - 1].id * 1 + 1,
                                        quantity: 1,
                                        total: v.price,
                                        incre:<button key={Data[Data.length - 1].id * 1 + 1} style={{border:'none',borderRadius:'50%'}} onClick={()=>dispatch(plus({id:Data[Data.length - 1].id * 1 + 1}))}>+</button>,
                                        decre:<button key={Data[Data.length - 1].id * 1 + 1} style={{border:'none',borderRadius:'50%'}}
                                        onClick={()=>dispatch(deduction({id:Data[Data.length - 1].id * 1 + 1}))}>-</button>,
                                    }))}>加入購物車</button>
                                </div>
                            </div>
                        </Col>

                    )
                })
                }
            </Row>





        </div>
    )
}

export default ProductList
