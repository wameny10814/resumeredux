import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Nav from './features/Nav';
import Home from './features/HomePage/Home';
import ProductList from './features/ProductList/ProductList';
import Cart from './features/CartPage/Cart';
import Footer from './Footer';
import Checkout from './features/Linepay/Checkout';
import Confirm from './features/Linepay/Confirm';
import { HashRouter, Route, Routes } from 'react-router-dom'; // 使用 HashRouter
import { ConfigProvider } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import Contactus from './features/Contact/Contactus';
import Login from './features/MeberPage/Login';
import ProductManage from './features/MeberPage/ProductManage';
import MemberCenter from './features/MeberPage/MerberCenter';
import ReceiveForm from './features/CartPage/ReceiveForm';
import ProductDetail from './features/ProductList/ProductDetail';
import StyledLayout from './features/StyleLayout';
import AuthContextProvider from './features/MeberPage/AuthConextProvider';

function App() {
  return (
    <AuthContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#AC7355',
          },
        }}
      >
        <HashRouter> {/* 修改這裡 */}
          <Routes>
            <Route path="/resumeredux" element={<Home />} />
            <Route path="/" element={<Home />} /> 
            <Route path="/Login" element={<Login />} />

            {/* Routes with shared layout */}
            <Route element={<StyledLayout />}>
              <Route path="/ProductList" element={<ProductList />}>
                <Route path=":productId" element={<ProductDetail />} />
              </Route>
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Counter" element={<Counter />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/linepayconfirm" element={<Confirm />} />
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/ProductManage" element={<ProductManage />} />
              <Route path="/MemberCenter" element={<MemberCenter />} />
              <Route path="/ReceiveForm" element={<ReceiveForm />} />
            </Route>
          </Routes>

          <Footer />
        </HashRouter>
      </ConfigProvider>
    </AuthContextProvider>
  );
}

export default App;
