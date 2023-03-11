import React from 'react'
import {useEffect,useState} from 'react'

function Checkout() {
    const [ID, setID] = useState(0)
    const checkout = () => {
        fetch('http://localhost:3500/admin2/checkout/1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((r) => r.json())
            .then((data) => {
                console.log('data', data);
                setID(data.orderId);
            })
    }

    const createOrder = () => {
        fetch('http://localhost:3500/admin2/createOrder/'+ID, {
            method: 'POST',
            body:'',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((r) => r.json())
            .then((data) => {
                // console.log('createOrderdata', data);
                window.location.assign(data.paymentUrl.web);
            });
    }
    useEffect(() => {
        checkout();
    }, [])
    return (
        <div>
            <p>Checkout</p>
            
            <button onClick={createOrder}>送出表單</button>
            
        </div>
    )
}

export default Checkout
