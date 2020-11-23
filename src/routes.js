import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import LoginAdmin from './pages/LoginAdmin';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import FAQScreen from './pages/FAQScreen';
import CheckoutSignup from './pages/CheckoutSignup';
import BottomNavigation from './components/BottomNavigation';
import HeaderNav from './components/HeaderNav';

const Routes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/cart" component={CartScreen}/>
      <Route path="/faq" component={FAQScreen}/>
      <Route path="/ckeckout-signup" component={CheckoutSignup}/>
      <Route path="/admin" component={LoginAdmin} />
      <BottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
