import React from 'react'
import { useState, useContext, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row } from 'antd';
import { inputotherinfo } from '../counter/CartSlice';
import styles from '../styles/ReceiveForm.module.css';
import Confirm from '../Linepay/Confirm';

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

    const [sortedinfo, setSortedInfo] = useState([]);

    const [paymentstatus, setPaymentStatus] = useState(false);

    const gotopay = ()=>{
        console.log('addotherinfo',orderinfo.firstname);
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
         // Use the updated state after dispatching
        const updatedData = [...Data];
        if (updatedData.length > 0) {
            updatedData[0] = {
                ...updatedData[0],
                firstname: orderinfo.firstname,
                lastname: orderinfo.lastname,
                email: orderinfo.email,
                address: orderinfo.address,
                orderid: orderid,
                orderdate: orderdate
            };
        }
        setSortedInfo(updatedData);



        const paydata = updatedData.map(function (value, index, array){

            let ordercode = array[0].orderid;
            return {
                ...value,      
                orderid: ordercode,  
                firstname:array[0].firstname,
                lastname:array[0].lastname,
                email:array[0].email,
                address:array[0].address,
            };
          });
        

     

          const dataforgotopay = paydata.filter((data) => data.id !== 0);
         


        fetch('http://localhost:3500/admin2/gotopay', {
            method: 'POST',
            body: JSON.stringify(dataforgotopay),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((r) => r.json())
            .then((data) => {

                console.log('data',data);

                fetch('http://localhost:3500/admin2/checkout', {
                    method: 'POST',
                    body: JSON.stringify(updatedData),
                    headers: { 'Content-Type': 'application/json' }
                    })
                .then((r) => r.json())
                .then((data) => {
                    console.log('data2', data);
                    // setID(data.orderId);
                    window.location.assign(data.paymentUrl.web);
                    // setPaymentStatus(true);
                    
                })

            })
    }

    const checkout = () => {
        gotopay();
    }

 

    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        console.log({ id, val });
        setOrderInfo({ ...orderinfo, [id]: val });
        };
  return (
    <div>
      {paymentstatus === false ? ( 
        <> 
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
                    <button onClick={checkout} type="">前往結帳(Linepay){paymentstatus}</button>
                </div>
            </div>
        </>
       ):(<Confirm sortedinfo={sortedinfo}></Confirm>)}

    </div>
  )
}

export default ReceiveForm