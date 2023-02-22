import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginTaehoon from './pages/taehoon/Login/LoginTaehoon';
import MainTaehoon from './pages/taehoon/Main/MainTaehoon';

import LoginSomyi from './pages/somyi/Login/LoginSomyi';
import MainSomyi from './pages/somyi/Main/MainSomyi';

import LoginKitae from './pages/kitae/Login/LoginKitae';
import MainKitae from './pages/kitae/Main/MainKitae';

import LoginYoojeong from './pages/yoojeong/Login/LoginYoojeong';
import MainYoojeong from './pages/yoojeong/Main/MainYoojeong';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login-taehoon" element={<LoginTaehoon />} />
        <Route path="/main-taehoon" element={<MainTaehoon />} />
        <Route path="/login-yoojeong" element={<LoginYoojeong />} />
        <Route path="/main-yoojeong" element={<MainYoojeong />} />
        <Route path="/login-somyi" element={<LoginSomyi />} />
        <Route path="/main-somyi" element={<MainSomyi />} />
        <Route path="/login-kitae" element={<LoginKitae />} />
        <Route path="/main-kitae" element={<MainKitae />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
