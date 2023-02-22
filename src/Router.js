import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김코드의 컴포넌트
import LoginTaehoon from './pages/taehoon/Login/Login';
import MainTaehoon from './pages/taehoon/Main/Main';

// 김개발의 컴포넌트
import LoginSomyi from './pages/somyi/Login/Login';
import MainSomyi from './pages/somyi/Main/Main';

import LoginKitae from './pages/kitae/Login/Login';
import MainKitae from './pages/kitae/Main/Main';

import LoginYoojeong from './pages/yoojeong/Login/Login';
import MainYoojeong from './pages/yoojeong/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
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
