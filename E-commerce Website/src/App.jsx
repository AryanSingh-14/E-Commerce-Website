
import React from 'react'
import Home from "./pages/Home.jsx"
import  ProductsList  from './pages/ProductsList.jsx';
import Product from './pages/Product.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import {BrowserRouter as Router, Route,Routes, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import Success from "./pages/Success.jsx";



const App = () => {
  const user=useSelector(state=>state.user.currentUser)

  return (
   <Router>
    <Routes>
      <Route exact path="/" element={user?<Home/>:<Login/>}/>
      <Route path="/products/:category" element={user?<ProductsList/>:<Navigate to="/"/>}/>
      <Route path="/product/:id" element={user?<Product/>:<Navigate to="/"/>}/>
      <Route path="/cart" element={user?<Cart/>:<Navigate to="/"/>}/>
      <Route path="/login"  element={user?<Home/>:<Login/>}/>
                                        
        <Route path="/register" element={<Register/>}/>
        
    </Routes>
    </Router>
)};
export default App;
