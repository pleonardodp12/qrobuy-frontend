import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import LoginAdmin from './pages/LoginAdmin';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import FAQScreen from './pages/FAQScreen';
import BottomNavigation from './components/BottomNavigation';
import ProductScreen from './pages/ProductScreen';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/cart" component={CartScreen}/>
      <Route path="/faq" component={FAQScreen}/>
      <Route path="/admin" component={LoginAdmin} />
      <Route path="/product" component={ProductScreen} />
      <BottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
