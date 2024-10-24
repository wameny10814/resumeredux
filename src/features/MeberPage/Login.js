import React from 'react'
import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../MeberPage/AuthContext';
import styles from '../styles/Login.module.css';
import Nav from '../Nav';
import stylenav from '../styles/ProductDetail.module.css'

function Login() {
      //設定登入資料
    const [myform, setMyform] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [scrollTop,setScrollerTop] = useState(0);

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


    const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    // console.log({ id, val });
    setMyform({ ...myform, [id]: val });
    };

    const {
        REACT_APP_FETCHORIGIN,
    } = process.env;


    
    const loginbtn = function(){
        fetch(`${REACT_APP_FETCHORIGIN}/admin2/logindesu`, {
            method: 'POST',
            body: JSON.stringify(myform),
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then((r) => r.json())
        .then((result) => {
            // console.log(result);
            // console.log('myform',myform);

            if(result.success == true){

                localStorage.setItem('auth', JSON.stringify(result));
                navigate('/resumeredux');
                setAuth({
                    ...result,
                    authorized: true,
                });

            }else{
                alert('登入失敗，請檢查帳號密碼。')
            }
        });
        
        
    }

    
    return (
        <div>
            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            <div className={styles.bannerSec}>
                <h2  className={styles.title}>登入</h2>
                <div  className={styles.inputsec}>
                
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={myform.account}
                        onChange={changeFields}
                        placeholder="帳號:admin"
                        className={styles.inputstyles}></input>
                </div>
            <div className={styles.inputsec}>
        
                <input
                    id="password"
                    type='text'
                    name="passwrod"
                    onChange={changeFields}
                    value={myform.password}
                    placeholder="密碼:admin"
                    className={styles.inputstyles}></input>
            </div>
            <div><button onClick={loginbtn} className={styles.loginbtn}>登入</button></div>
            </div>    
        </div>
    )
}

export default Login
