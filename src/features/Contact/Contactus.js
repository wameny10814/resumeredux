import React from 'react'
import contactBanner from '../imgs/contactus.png';
import banner from '../imgs/contact.jpg'
import styles from '../styles/Contactus.module.css';
import { useRef, useEffect, useState } from 'react';
import Nav from '../Nav'
import stylenav from '../styles/ProductDetail.module.css'
import { Button, Modal , message} from 'antd';

function Contactus() {
    const [myform, setMyform] = useState({
        name: '',
        email: '',
        context: '',
    });
    const [scrollTop,setScrollerTop] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
        //清空state
        setMyform({
            name: '',
            email: '',
            context: '',
        })
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

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
        let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        let testresult = emailRule.test(myform.email);
        if(myform.name.length <=1 || myform.context.length <=1){
            messageApi.info('聯絡人及備註不可空白');
            return
        }
        if(testresult == false){
            messageApi.info('電子信箱格式錯誤');
            return
        }
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
                if(result.success == true){
                    showModal();
                  
                  
                    
                }else{
                    console.log('error');
                }
                
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
            {contextHolder}

            <Modal title="信件已送出" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>感謝回饋，該內容已送至客服信箱。</p>
            </Modal>

        </div>
    )
}

export default Contactus
