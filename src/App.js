import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import Nav from './features/Nav'
import Home from './features/HomePage/Home'
import ProductList from './features/ProductList/ProductList';
import Cart from './features/CartPage/Cart'
import Footer from './Footer';
import Checkout from './features/Linepay/Checkout'
import Confirm from './features/Linepay/Confirm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  ConfigProvider } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import Contactus from '../src/features/Contact/Contactus';
import Login from './features/MeberPage/Login';
import ProductManage from './features/MeberPage/ProductManage';
import MemberCenter from './features/MeberPage/MerberCenter';
import ReceiveForm from './features/CartPage/ReceiveForm';


import ProductDetail from './features/ProductList/ProductDetail';

import StyledLayout from './features/StyleLayout';

//context
import AuthContextProvider from '../src/features/MeberPage/AuthConextProvider';


function App() {
  return (
    
    <AuthContextProvider>
        <ConfigProvider
           theme={{
            token: {
              //antdesign 主色調
              colorPrimary: '#AC7355',
            },
          }}
        
        >
          <BrowserRouter>
            {/* <Nav></Nav> */}
            
              <Routes>
                <Route path="/resumeredux" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                {/* 有些要套用共同樣式 */}
                <Route element={<StyledLayout />}>

                  <Route path="/ProductList" element={<ProductList />}/>
                  <Route path="/ProductList">
                    <Route path=":productId" element={<ProductDetail />} />
                  </Route>
                  <Route path="Cart" element={<Cart />} />
                  <Route path="Counter" element={<Counter />} />
                  <Route path="Checkout" element={<Checkout />} />
                  <Route path="linepayconfirm" element={<Confirm />} />
                  <Route path="/Contactus" element={<Contactus />} />
                  <Route path="/ProductMange" element={<ProductManage />} />
                  <Route path="/MemberCenter" element={<MemberCenter />} />
                  <Route path="/ReceiveForm" element={<ReceiveForm />} />

                </Route>
              

            
                  
              </Routes>
        
          
            <Footer></Footer>
          </BrowserRouter>
        </ConfigProvider>
      </AuthContextProvider>
  
  
   
  )
}

export default App;
