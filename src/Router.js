import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';

import Main from '../src/pages/Main/Main';
import ProductList from '../src/pages/ProductList/ProductList';
import ProductDetail from '../src/pages/ProductDetail/ProductDetail';
import Cart from '../src/pages/Cart/Cart';
import Order from '../src/pages/Order/Order';

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
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
