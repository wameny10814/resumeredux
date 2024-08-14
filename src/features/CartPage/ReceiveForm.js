import React from 'react'
import { useState, useContext, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Divider, Row } from 'antd';
import { addCart,plus,deduction,inputotherinfo } from '../counter/CartSlice';
import styles from '../styles/ReceiveForm.module.css'

function ReceiveForm() {
    //從store拿取資料、拿現在的訂單資訊
    const Data = useSelector(state => state.cartTotal.value)
    const DataWithoutIniT = Data.filter((data) => data.id !== 0)
    const dispatch = useDispatch();
    const [orderinfo, setOrderInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: ''
    });

    const gotopay = ()=>{

        const paydata = Data.map(function (value, index, array){
            console.log('value',value.orderid);
            console.log('array',array[0].orderid);
            let ordercode = array[0].orderid;
            return {
                ...value,      // Spread the original object's properties
                orderid: ordercode,  // Override the 'orderid' property
                firstname:array[0].firstname,
                lastname:array[0].lastname,
                email:array[0].email,
                address:array[0].address,
            };
          });
          console.log('paydata',paydata);

          const dataforgotopay = paydata.filter((data) => data.id !== 0);
          console.log('dataforgotopay',dataforgotopay);


        fetch('http://localhost:3500/admin2/gotopay', {
            method: 'POST',
            body: JSON.stringify(dataforgotopay),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((r) => r.json())
            .then((data) => {

                console.log('data',data);

            })

        

    }

    const checkout = () => {
        addotherinfo();
        let bodyformat = DataWithoutIniT;
        gotopay();
        // fetch('http://localhost:3500/admin2/checkout', {
        //     method: 'POST',
        //     body: JSON.stringify(DataWithoutIniT),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        //     .then((r) => r.json())
        //     .then((data) => {
        //         // console.log('data', data);
        //         // setID(data.orderId);
        //         window.location.assign(data.paymentUrl.web);
        //     })

    }

    const addotherinfo = () =>{
        console.log('addotherinfo',orderinfo);
        let date = new Date();
        let orderid =`${date.getFullYear()}${date.getMonth()}${date.getDate()}${Math.floor(Math.random() * 100000)}`;
        let orderdate = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;

        console.log('orderid',orderid);
        dispatch(inputotherinfo({
            firstname:orderinfo.firstname,
            lastname:orderinfo.lastname,
            email:orderinfo.email,
            address:orderinfo.address,
            orderid:orderid,
            orderdate:orderdate
        }))
        
    }

    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        // console.log({ id, val });
        setOrderInfo({ ...orderinfo, [id]: val });
        };
  return (
    <div>
        <h2>收件人資訊</h2>
        <div>
            <Row gutter={[0, 24]}>
                <Col span={12}><input placeholder='姓' id="firstname" className={styles.inputstyles} value={orderinfo.firstname}   onChange={changeFields}></input>
                </Col>
                <Col span={12}><input placeholder='名' id="lastname" className={styles.inputstyles} value={orderinfo.lastname} onChange={changeFields}></input>
                </Col>
            </Row>
            <Row gutter={[0, 24]}>
                <Col span={24}><input placeholder='電子信箱' id="email" className={styles.inputstyles} value={orderinfo.email}   onChange={changeFields}></input>
                </Col>
            </Row>
            <Row gutter={[0, 24]}>
                <Col span={24}>
                    <input placeholder='收件地址'  id="address" className={styles.inputstyles}
                    value={orderinfo.address}   onChange={changeFields}></input>
                </Col>
            </Row>
            <div>
                <button onClick={checkout} type="">前往結帳(Linepay)</button>
            </div>
        </div>
    </div>
  )
}

export default ReceiveForm