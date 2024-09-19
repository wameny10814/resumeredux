import React from 'react'
import {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Checkout() {
    const [ID, setID] = useState(0);
    const Data = useSelector(state => state.cartTotal.value)
    const checkout = () => {
         console.log('datafromRedux',Data)
    //     fetch('http://localhost:3500/admin2/checkout/1', {
    //         method: 'POST',
    //         body:{
             
    //         }
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then((r) => r.json())
    //         .then((data) => {
    //             console.log('data', data);
    //             setID(data.orderId);
    //         })
    // }
    }
       const {
        REACT_APP_FETCHORIGIN,
      } = process.env;

    const createOrder = () => {
        fetch(`${REACT_APP_FETCHORIGIN}/admin2/createOrder/`+ID, {
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
            <button onClick={createOrder}>送出表單</button>
        </div>
    )
}

export default Checkout
