import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import LoginAdmin from './pages/LoginAdmin';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import FAQScreen from './pages/FAQScreen';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/cart" exact component={CartScreen}/>
      <Route path="/faq" exact component={FAQScreen}/>
      <Route path="/admin" exact component={LoginAdmin} />
    </BrowserRouter>
  )
}

export default Routes;
