import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Divider, Row } from 'antd';
import styles from '../styles/ReceiveForm.module.css'

function ReceiveForm() {
   //拿現在的訂單資訊
    const Datas = useSelector(state => state.cartTotal.value)

    const checkout = () => {
       
        
        console.log('DataWithoutIniT',Datas);

        // let bodyformat = DataWithoutIniT;
        // console.log('bodyformat',bodyformat);
    //    delete bodyformat[0].incre;
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
  return (
    <div>
        <h2>收件人資訊</h2>
        <div>
            <Row gutter={[0, 24]}>
                <Col span={12}><input placeholder='姓' className={styles.inputstyles}></input>
                </Col>
                <Col span={12}><input placeholder='名' className={styles.inputstyles}></input>
                </Col>
                
              
            </Row>
            <Row gutter={[0, 24]}>
                <Col span={24}><input placeholder='電子信箱' className={styles.inputstyles}></input>
                </Col>
            </Row>
            <Row gutter={[0, 24]}>
                <Col span={24}><input placeholder='收件地址' className={styles.inputstyles}></input>
                </Col>
            </Row>
            <div><button onClick={checkout} type="">前往結帳(Linepay)</button></div>
        </div>
    </div>
  )
}

export default ReceiveForm