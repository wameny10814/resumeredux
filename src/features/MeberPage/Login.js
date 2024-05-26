import React from 'react'
import { useState, useContext, useRef } from 'react';
import styles from '../styles/Login.module.css';

function Login() {
      //設定登入資料
    const [myform, setMyform] = useState({
        account: '',
        password: '',
    });


    const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    // console.log({ id, val });
    setMyform({ ...myform, [id]: val });
    };

    const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);

    fetch('http://localhost:3500/admin2/logindesu', {
        method: 'POST',
        body: JSON.stringify(myform),
        headers: {
        'Content-Type': 'application/json',
        },
    })
        .then((r) => r.json())
        .then((result) => {
        console.log('result', result);
        //result為
        //success:true/false
        //data:sid,account,levle,token
        if(result.success == true){
            alert('成功')
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
                        id="account"
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
