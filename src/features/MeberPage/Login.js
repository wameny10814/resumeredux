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

    const whenSubmit = (event) => {
        event.preventDefault();
    
        console.log(myform);
    
        fetch('https://ec-course-api.hexschool.io/v2/admin/signin', {
            method: 'POST',
            body: JSON.stringify(myform),
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((result) => {
            if(result.message == '登入成功'){
                const { token, expired } = result;
                document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
                localStorage.setItem('auth', JSON.stringify(result));
                navigate('/resumeredux');
                setAuth({
                    ...result,
                    authorized: true,
                  });
            }else{
                alert('登入失敗')
            }
    
            });
        };
    return (
        <div>
            <div className={styles.bannerSec}>
                <h2  className={styles.title}>登入</h2>
                <div  className={styles.inputsec}>
                  
                    <input
                        id="username"
                        name="account"
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
            <div><button onClick={whenSubmit} className={styles.loginbtn}>登入</button></div>
            </div>
        
            
        </div>
    )
}

export default Login
