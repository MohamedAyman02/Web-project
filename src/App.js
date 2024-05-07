import React, { Fragment } from 'react';
import { LoginForm } from './component/LoginForm';
import Register from './component/Register';
import NavBar from './homepage/NavBar';
import Slider from './component/slider/Slider';
import About from './component/About/About';
import Book from './component/book-slider/Book';
import data from './DataBase/data';
import Home from './Home/Homepage';
import Cart from './Cart/Cart';
import CartProvider from './context/CartProvider';
import{BrowserRouter,Route,Routes}from 'react-router-dom';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import Filter from './filtering';
const App = () => {
  return (
    <BrowserRouter>
    <Fragment>
      <NavBar/>
      
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/filter' element={<Filter/>}/>

      </Routes>
      </Fragment>
      </BrowserRouter>
      
      
   
  );
}

export default App;
