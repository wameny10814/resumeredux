import React from 'react'
import styles from '../styles/Confirm.module.css'
import { Col, Divider, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useContext, useRef,useEffect } from 'react';
import { deleteall } from '../counter/CartSlice';
import Nav from '../Nav';


function Confirm(props) {
    const Data = useSelector(state => state.cartTotal.value)
    // console.log('data',Data);
    const dispatch = useDispatch();

    const { sortedinfo } = props;
    const [orderinfo, setOrderInfo] = useState([]);
    const [mapitems, setMapItems] = useState([]);

    let array =  [123,123];




    return (
        <>  
            <Nav ></Nav>
            <div style={{textAlign:'center',height:'100vh',paddingTop:'5rem'}}>
                <h2 style={{paddingTop:'10rem'}}>付款完成!  期待您的下次光臨。</h2>
            </div>
        </>

        
    )
}

export default Confirm

