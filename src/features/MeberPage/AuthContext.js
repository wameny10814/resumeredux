import React from 'react';

const authContext = React.createContext({
  //使用authorized 判定是否為登入狀態
  authorized: false,
  sid: 0,
  token: '',
  expired:0,
  success:false,
  uid:'',
  message:''
  
  
});

export default authContext;