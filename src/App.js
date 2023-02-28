import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.tsx';
import Categories from './components/Categories.tsx';
import Navbar from './components/Navbar';
import './components/navbar.css'
import ProductDetails from './components/ProductDetails.tsx';
import Cart from './components/Cart.tsx';
import { CartContextProvider } from './components/CartContext'
import { Toaster } from "react-hot-toast";
import { PriceDetailsProvider } from './components/PriceDetails'

function App() {

  return (
    <CartContextProvider>
      <PriceDetailsProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path='/mystore' element={< MainPage />}></Route>
              <Route path="/men's clothing" element={< Categories category="men's clothing" />}></Route>
              <Route path="/women's clothing" element={< Categories category="women's clothing" />}></Route>
              <Route path='/electronics' element={< Categories category='electronics' />}></Route>
              <Route path='/jewelery' element={< Categories category='jewelery' />}></Route>
              <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
              <Route path='/:category' element={<ProductDetails />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
            <Toaster className="toast-message" style={{ width: "2000px" }} delay={3000} position='top-right' />
          </div>
        </Router>
      </PriceDetailsProvider>
    </CartContextProvider>
  );
}

export default App;
