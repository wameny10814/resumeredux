import React from 'react'
import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../MeberPage/AuthContext';
import styles from '../styles/Login.module.css';

function Login() {
      //設定登入資料
    const [myform, setMyform] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);


    const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    // console.log({ id, val });
    setMyform({ ...myform, [id]: val });
    };

  
    
    const loginbtn = function(){
        console.log('loginbtn');


        fetch('http://localhost:3500/admin2/logindesu', {
            method: 'POST',
            body: JSON.stringify(myform),
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then((r) => r.json())
        .then((result) => {
            console.log(result);
            console.log('myform',myform);

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
            <div className={styles.bannerSec}>
                <h2  className={styles.title}>登入</h2>
                <div  className={styles.inputsec}>
                
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={myform.account}
                        onChange={changeFields}
                        placeholder="帳號"></input>
                </div>
            <div className={styles.inputsec}>
        
                <input
                    id="password"
                    type='text'
                    name="passwrod"
                    onChange={changeFields}
                    value={myform.password}
                    placeholder="密碼"></input>
            </div>
            <div><button onClick={loginbtn} className={styles.loginbtn}>登入</button></div>
            </div>    
        </div>
    )
}

export default Login
