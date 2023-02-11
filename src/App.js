import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import Nav from './features/Nav'
import ProductList from './features/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Counter></Counter> */}
      <ProductList></ProductList>

    </div>
  )
}

export default App;
