import React, { useState } from "react";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

import "./App.css";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";
import Data from "./FlashDeals/Data";
import Sdata from './Shops/Sdata'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer.jsx'
function App () {

    const { productItems } = Data;
    const {shopItems}=Sdata;
    console.log(shopItems);
    
    const [cartItem, setCartItem] =useState([]);
    const addToCart = (product) => {
      const productExit = cartItem.find((item) => item.id === product.id)
     
      if (productExit) {
        setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      } else {
        setCartItem([...cartItem, { ...product, qty: 1 }])
      }
    }
      
  const decreaseQty = (product) => {
  
    const productExit = cartItem.find((item) => item.id === product.id)

    
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
     
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
    return (
     <Router>
     <Header cartItem={cartItem.length}/>
       <Routes>
        <Route  path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}    />}/>
        <Route  path="/cart" element={<Cart cartItem={cartItem}   addToCart={addToCart} decreaseQty={decreaseQty} />}/>
       </Routes>
       <Footer/>
     </Router>
    );
  }

export default App;
