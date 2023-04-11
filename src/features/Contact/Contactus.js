import React from 'react'
import contactBanner from '../imgs/contactus.png';
import banner from '../imgs/contact.jpg'
import styles from '../styles/Contactus.module.css';
import { useRef, useEffect, useState } from 'react';

function Contactus() {
    const [myform, setMyform] = useState({
        name: '',
        email: '',
        context: '',
    });
    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        setMyform({ ...myform, [id]: val });
    };

    const submitemail = (event)=>{
        event.preventDefault();
        console.log('submit',myform)
        //fetch to backend
    }
    return (
        <div>
            <div className={styles.bannerSec}>
                <h2>聯絡我們</h2>
            </div>

            <form className={styles.form}>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>聯絡人</p>
                    <input className={styles.formitmeInput} onChange={changeFields} value={myform.name}   id="name"></input>
                </div>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>電子信箱</p>
                    <input className={styles.formitmeInput} onChange={changeFields} value={myform.email}   id="email"></input>
                </div>
                <div className={styles.formitmeSec}>
                    <p className={styles.formitmeTitle}>備註</p>
                    <textarea className={styles.formitmeTextArea}
                    onChange={changeFields} value={myform.context}   id="context"></textarea>
                </div>
                <button className={styles.formsubmit} onClick={submitemail}>送出</button>
            </form>

        </div>
    )
}

export default Contactus
