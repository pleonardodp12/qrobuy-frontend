import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import LoginAdmin from "./Admin/LoginAdmin";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import FAQScreen from "./pages/FAQScreen";
import User from "./pages/User";
import CheckoutScreen from "./pages/CheckoutScreen";
import BottomNavigation from "./components/BottomNavigation";
import ProductScreen from "./pages/ProductScreen";
import HeaderNav from "./components/HeaderNav";
import UserSignin from "./pages/UserSignin";
import UserSignup from "./pages/UserSignup";
import AdminOrders from "./Admin/AdminOrders";
import UserHistory from "./pages/UserHistory";

const Routes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/cart" component={CartScreen} />
      <Route path="/faq" component={FAQScreen} />
      <Route path="/checkout" component={CheckoutScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/user" exact component={User} />
      <Route path="/user/sign-in" exact component={UserSignin} />
      <Route path="/user/history" exact component={UserHistory} />

      <Route path="/admin" exact component={LoginAdmin} />
      <Route path="/user/sign-up" exact component={UserSignup} />
      <Route path="/admin/orders" exact component={AdminOrders} />
      <BottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
