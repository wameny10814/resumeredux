import React from 'react'
import { useState, useContext, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row,Space } from 'antd';
import { inputotherinfo } from '../counter/CartSlice';
import styles from '../styles/ReceiveForm.module.css';
import Confirm from '../Linepay/Confirm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
    const [TWSections, setTWSections] = useState([

        "台北市",
		"基隆市",
		"新北市",
		"連江縣",
		"宜蘭縣",
		"新竹市",
		"新竹縣",
		"桃園市",
		"苗栗縣",
		"台中市",
		"彰化縣",
		"南投縣",
		"嘉義市",
		"嘉義縣",
		"雲林縣",
		"台南市",
		"高雄市",
		"澎湖縣",
		"金門縣",
		"屏東縣",
		"台東縣",
		"花蓮縣"

    ]);

    const {
        REACT_APP_FETCHORIGIN,
      } = process.env;

      const navigate = useNavigate();
    

    const gotopay = ()=>{
        console.log('addotherinfo',orderinfo);
        let date = new Date();
        let orderid =`${date.getFullYear()}${date.getMonth()}${date.getDate()}${Math.floor(Math.random() * 100000)}`;
        let orderdate = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;

        // console.log('orderid',orderid);
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
                orderdate: orderdate,
                gender:orderinfo.gender,
                birthday:orderinfo.birthday,
                section:orderinfo.sections,
            };
        }
        setSortedInfo(updatedData);

        // console.log('updatedData',updatedData);



        const paydata = updatedData.map(function (value, index, array){

            let ordercode = array[0].orderid;
            return {
                ...value,      
                orderid: ordercode,  
                firstname:array[0].firstname,
                lastname:array[0].lastname,
                email:array[0].email,
                address:array[0].address,
                gender:array[0].gender,
                birthday:array[0].birthday,
                section:array[0].section,
            };
        });

        const dataforgotopay = paydata.filter((data) => data.id !== 0);

        console.log('dataforgotopay',dataforgotopay);

        // //寫進入資料庫
        fetch(`${REACT_APP_FETCHORIGIN}/admin2/gotopay`, {
            method: 'POST',
            body: JSON.stringify(dataforgotopay),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((r) => r.json())
            .then((data) => {

                // console.log('data',data);
                //line pay for 本機
                fetch(`${REACT_APP_FETCHORIGIN}/admin2/checkout`, {
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
        <div className={styles.formborder}> 
            <h2  className={styles.title}>收件人資訊</h2>
            <div >
                <Row gutter={[0, 24]}>
         
                    <Col span={11}>
                        <p className={styles.formtitlestyles}>姓
                        </p>
                        <input  id="firstname" className={styles.inputstyles} value={orderinfo.firstname}   onChange={changeFields}></input>
                    
                    </Col>
                    <Col span={12} offset={1}>
                        <p className={styles.formtitlestyles}>
                            名
                        </p>
                        <input id="lastname" className={styles.inputstyles} value={orderinfo.lastname} onChange={changeFields}></input>
                    </Col>
                    
                </Row>
                <Row>
                    <Col span={11}>
                        <p className={styles.formtitlestyles}>
                            生日
                            
                        </p>
                        <input  id="birthday" type="date" onChange={changeFields} className={styles.inputstyles}></input> 
                        
                    </Col>
                    <Col span={12} offset={1}>
                        <p className={styles.formtitlestyles}>
                            性別
                        </p>
                        <select  placeholder='性別' id="gender" className={styles.selectstyles} onChange={changeFields}>
                                <option value="F">女性</option>
                                <option value="M">男性</option>
                                <option value="O">其他</option>
                        </select>
                    </Col>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={24} >
                        <p className={styles.formtitlestyles}>
                            電子信箱
                        </p>
                        <input  id="email" className={styles.inputstyles} value={orderinfo.email}   onChange={changeFields}></input>
                    </Col>
                </Row>
                <Row gutter={[0, 24]}>
                    <Col span={4}>
                        <p className={styles.formtitlestyles}>
                            收件縣市
                        
                        </p>
                        <select id="sections" className={styles.selectstyles} onChange={changeFields}>
                            {TWSections.map((value,index)=>{
                                return (
                                    <option value={value} key={value}>{value}</option>
                                )
                            })}
                        </select>
                      
                    </Col>
                    <Col span={20}>
                       <p className={styles.formtitlestyles}>
                       收件地址
                       </p>
                       <input  id="address" className={styles.inputstyles}
                        value={orderinfo.address}   onChange={changeFields}></input>
                    </Col>
                </Row>
                <div className={styles.flexs}>
                    {/* <button onClick={checkout} className={styles.gotolinepay} type="">前往結帳{paymentstatus}</button> */}
                    <Link to="/linepayconfirm">
                            <button className={styles.gotolinepay}>結帳</button>
                    </Link>
                </div>
            </div>
        </div>
    ):(<Confirm sortedinfo={sortedinfo}></Confirm>)}

    </div>
  )
}

export default ReceiveForm