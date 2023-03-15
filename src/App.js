import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import Nav from './features/Nav'
import ProductList from './features/ProductList/ProductList';
import Cart from './features/CartPage/Cart'
import Footer from './Footer';
import Checkout from './features/Linepay/Checkout'
import Confirm from './features/Linepay/Confirm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
      token: {
        colorPrimary: 'rgb(255, 228, 196)',
      },
    }}
    >
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="linePay/confirm" element={<Confirm />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
