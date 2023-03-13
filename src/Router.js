import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';

import Main from '../src/pages/Main/Main';
import ProductList from '../src/pages/ProductList/ProductList';
import ProductDetail from '../src/pages/ProductDetail/ProductDetail';
import Cart from '../src/pages/Cart/Cart';
import Order from '../src/pages/Order/Order';
import Email from '../src/pages/Email/Email';
import Login from '../src/pages/Login/Login';
import Signup from '../src/pages/Signup/Signup';
import Account from '../src/pages/Account/Account';
import Authentication from '../src/pages/Authentication/Authentication';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/email" element={<Email />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        {/* FIXME : router 임시 추가 */}
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
