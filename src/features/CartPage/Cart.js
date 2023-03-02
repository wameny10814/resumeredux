import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartTable from './CartTable'


function Cart() {
    const Data = useSelector(state => state.cartTotal.value)
    return (
        <div>
            <div>
                <h2>購物車清單</h2>
            </div>
         
            <CartTable></CartTable>
        </div>
    )
}

export default Cart
