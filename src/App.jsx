import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Logout from './components/LogOut';
import LogIn from './components/LogIn';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import TShirts from './components/T-Shirts';
import CropHoodies from './components/Crop-Hoodies';
import SweatShirts from './components/Sweat-Shirts';
import Jackets from './components/Jackets';
import Hoodies from './components/Hoodies';
import CropTops from './components/CropTops';
import Wishlist from './components/Wishlist';
import ProductReview from './components/ProductReview';
import ProductManager from './components/ProductManager';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/t-shirts" element={<TShirts />} />
          <Route path="/croptops" element={<CropTops />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/sweatshirts" element={<SweatShirts />} />
          <Route path="/crophoodies" element={<CropHoodies />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/add-product" element={<ProductManager/>} />
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App