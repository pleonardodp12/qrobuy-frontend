import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import LoginAdmin from './pages/LoginAdmin';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import FAQScreen from './pages/FAQScreen';
import User from './pages/User';
import CheckoutSignup from './pages/CheckoutSignup';
import BottomNavigation from './components/BottomNavigation';
import HeaderNav from './components/HeaderNav';
import UserSignin from './pages/UserSignin';
import UserSignup from './pages/UserSignup';

const Routes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/cart" component={CartScreen}/>
      <Route path="/faq" component={FAQScreen}/>
      <Route path="/ckeckout-signup" component={CheckoutSignup}/>
      <Route path="/admin" component={LoginAdmin} />
      <Route path="/user" exact component={User} />
      <Route path="/user/sign-in" exact component={UserSignin} />
      <Route path="/user/sign-up" exact component={UserSignup} />
      <BottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
