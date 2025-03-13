import React from 'react';
import styles from '../styles/MemberCenter.module.css';
import { Button, Result } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function GoLogin() {
    return (
        <div>
        <div className={styles.oohlogin}>
            <Result
              title="管理員請記得登入喔!"
              
              extra={
            
                <Button type="primary" key="console">
                      <Link to="/Login">
                        Go Login
                      </Link>
                </Button>
              }
            />
        </div>
            
        </div>
    )
}

export default GoLogin
