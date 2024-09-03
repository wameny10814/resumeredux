import React from 'react'
import styles from '../styles/Confirm.module.css'
import { Col, Divider, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useContext, useRef,useEffect } from 'react';
import { deleteall } from '../counter/CartSlice';

function Confirm(props) {
    const Data = useSelector(state => state.cartTotal.value)
    // console.log('data',Data);
    const dispatch = useDispatch();

    const { sortedinfo } = props;
    const [orderinfo, setOrderInfo] = useState([]);
    const [mapitems, setMapItems] = useState([]);

    let array =  [123,123];




    // useEffect(() => {
    // setOrderInfo(sortedinfo);
    // dispatch(deleteall());
    // let maporderitems = sortedinfo.filter((data)=>data.id !== 0);
    // setMapItems(maporderitems);
    // console.log('maporderitems',maporderitems);
    // }, []);
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h2>Line Pay付款完成!  期待您的下次光臨。</h2>
            </div>
        </>

        
    )
}

export default Confirm

