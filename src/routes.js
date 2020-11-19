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
      <Route path="/cart" component={CartScreen}/>
      <Route path="/faq" component={FAQScreen}/>
      <Route path="/admin" component={LoginAdmin} />
    </BrowserRouter>
  );
};

export default Routes;
