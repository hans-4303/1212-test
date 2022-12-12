import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='product' element={<Product></Product>}></Route>
          <Route path='product/:detail' element={<ProductDetail></ProductDetail>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
