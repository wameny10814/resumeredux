import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartTable from './CartTable'
import styles from '../styles/Cart.module.css';


function Cart() {
    const Data = useSelector(state => state.cartTotal.value)
    return (
        <div>
            <div className={styles.title}>
                <h3>購物車清單</h3>
            </div>
            <CartTable></CartTable>
        </div>
    )
}

export default Cart
