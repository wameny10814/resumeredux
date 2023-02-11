import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { discount75, discount9, discountincrementByAmount } from './DiscountSlice'


export default function Counter() {

    const [price, setPrice] = useState(500);
    //useSelector 取值;useDispatch設定值
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const discount = useSelector(state => state.discount.value)
    const check = ()=>{
        let dis = {discount}
        let counting = {count}
    }


    return (
        <div>
            <div>
                <h2>原價:{price}</h2>
                <h2>折扣價:{discount}</h2>
                {/* <h2>總價:{{discount}*{count}}</h2> */}
            </div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            {/* //折扣 */}
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(discount75())}
                >
                    75折
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(discount9())}
                >
                    9折
                </button>
                <button onClick={check}>結帳</button>
            </div>
        </div>
    )
}