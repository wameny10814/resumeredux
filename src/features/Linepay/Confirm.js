import React from 'react'
import styles from '../styles/Confirm.module.css'
import { Col, Divider, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

function Confirm() {
    const Data = useSelector(state => state.cartTotal.value)
    console.log('data',Data);
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h2>Line Pay付款完成!  期待您的下次光臨。</h2>
            </div>
            <div>
                <div style={{textAlign:'center'}}>for logo</div>
                <div style={{textAlign:'center'}}><h3>收據明細</h3></div>
            </div>
            <div>
                <Row gutter={[0, 24]}>
                    <Col span={12}>
                        <p>公司名稱:恬圈</p>
                        <p>聯絡地址：聯絡地址聯絡地址聯絡地址聯絡地址聯絡地址聯絡地</p>
                        <p>公司電話：03-55688</p>
                    </Col>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={12}>
                        <div>
                            <p>收件資訊</p>
                            <p>Frist name</p><p>資料</p>
                            <p>Last name</p><p>資料</p>
                            <p>Email</p><p>資料</p>
                            <p>Address</p><p>資料</p>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                    <div>
                        <p>訂單資訊</p>
                        <p>訂購日期</p><p>資料</p>
                        <p>訂單編號</p><p>資料</p>
                        <p>付款方式</p><p>Line pay</p>
                    </div>
                    </Col>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={8}>
                        <p>商品名稱</p>
                    </Col>
                    <Col span={5}>
                        <p>單價</p>
                    </Col>
                    <Col span={5}>
                        <p>件數</p>
                    </Col>
                    <Col span={5}>
                        <p>總價</p>
                    </Col>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={8}>
                        <p>Product name</p>
                    </Col>
                    <Col span={5}>
                        <p>50</p>
                    </Col>
                    <Col span={5}>
                        <p>5</p>
                    </Col>
                    <Col span={5}>
                        <p>250</p>
                    </Col>
                </Row>
                <div style={{textAlign:'end'}}>
                    <p>總金額</p><p>500</p>
                </div>
                <div>感謝惠顧!</div>
            </div>
        </>

        
    )
}

export default Confirm

