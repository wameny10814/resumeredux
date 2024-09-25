import React from 'react'
import contactBanner from '../imgs/contactus.png';
import banner from '../imgs/contact.jpg'
import styles from '../styles/Contactus.module.css';
import { useRef, useEffect, useState } from 'react';
import Nav from '../Nav'
import stylenav from '../styles/ProductDetail.module.css'

function Contactus() {
    const [myform, setMyform] = useState({
        name: '',
        email: '',
        context: '',
    });
    const [scrollTop,setScrollerTop] = useState(0);
    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        setMyform({ ...myform, [id]: val });
    };

    const {
        REACT_APP_FETCHORIGIN,
      } = process.env;

    const submitemail = (event) => {
        event.preventDefault();
        // console.log('FETCHORIGIN', process.env.REACT_APP_FETCHORIGIN);
        //fetch to backend
        fetch(`${REACT_APP_FETCHORIGIN}/admin2/contactus`, {
            method: 'POST',
            body: JSON.stringify(myform),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((result) => {
                console.log('result', result);
                
            })
            
    }

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollerTop(scrollTop / 100);
            console.log('scrollTop',scrollTop/100 + '%');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // 清理事件監聽器
        }
    }, [])

    const changeclassname = function(){
        if(scrollTop ===0){
            return stylenav.classshow0

        }else if(scrollTop >0){
            
            return stylenav.classshowup
        
        }
    }
    return (
        <div>
            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            <div className={styles.bannerSec}>
                <h2>聯絡我們</h2>
            </div>

            <form className={styles.form}>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>聯絡人</p>
                    <input className={styles.formitmeInput} onChange={changeFields} value={myform.name} id="name"></input>
                </div>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>電子信箱</p>
                    <input className={styles.formitmeInput} onChange={changeFields} value={myform.email} id="email"></input>
                </div>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>備註</p>
                    <textarea className={styles.formitmeTextArea}
                        onChange={changeFields} value={myform.context} id="context"></textarea>
                </div>
                <button className={styles.formsubmit} onClick={submitemail}>送出</button>
            </form>

        </div>
    )
}

export default Contactus
