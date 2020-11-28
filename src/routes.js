import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";
import LoginAdmin from "./Admin/LoginAdmin";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import FAQScreen from "./pages/FAQScreen";
import User from "./pages/User";
import CheckoutSignup from "./pages/CheckoutSignup";
import BottomNavigation from "./components/BottomNavigation";
import ProductScreen from "./pages/ProductScreen";
import HeaderNav from "./components/HeaderNav";
import UserSignin from "./pages/UserSignin";
import UserSignup from "./pages/UserSignup";
import AdminProducts from './Admin/AdminProducts';
import AdminOrders from "./Admin/AdminOrders";
import CreateProduct from "./Admin/AdminProducts/components/product-add";
import BottomNavbar from "./Admin/AdminProducts/components/bottomnavbar"

const Routes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/cart" component={CartScreen} />
      <Route path="/faq" component={FAQScreen} />
      <Route path="/ckeckout-signup" component={CheckoutSignup} />
      <Route path="/admin" exact component={LoginAdmin} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/user" exact component={User} />
      <Route path="/user/sign-in" exact component={UserSignin} />
      <Route path="/user/sign-up" exact component={UserSignup} />
      <Route path="/admin/orders" exact component={AdminOrders} />
      <Route path="/admin/products" exact component={AdminProducts} />
      <Route path='/admin/create-product' component={CreateProduct}/>
      <Switch>
        <Route path='/admin'/>
        <Route path='/admin/create-product'/>
        <Route path='/' component={BottomNavigation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
