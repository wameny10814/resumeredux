import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AuthContextProvider(props) {
  const { children } = props;
 
  const unAuthState = {
    authorized: false,
    sid: 0,
    token: '',
    expired:0,
    success:false,
    uid:'',
    message:''
  };
  //已設定登入成功寫進localStorage
  // 先查看 localStorage 的資料是否表示已登入
  //拿取localstorage資料
  const localAuthStr = localStorage.getItem('auth');

  //localAuthStr 有資料才開始
  let localAuth = { ...unAuthState };
  if (localAuthStr) {
    try {
      localAuth = JSON.parse(localAuthStr);
      if (localAuth.token) {
        //展開localAuth 塞進authorized
        localAuth = { ...localAuth, authorized: true };
      }
      
    } catch (ex) {}
  }
  const [auth, setAuth] = useState(localAuth);


  const logout = () => {
    localStorage.removeItem('auth');
    setAuth({ ...unAuthState });
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuth, logout, auth }}>
      {children}
    </AuthContext.Provider>
  );
}