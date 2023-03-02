import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import Nav from './features/Nav'
import ProductList from './features/ProductList/ProductList';
import Cart from './features/CartPage/Cart'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
