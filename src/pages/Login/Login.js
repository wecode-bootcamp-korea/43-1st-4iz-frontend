import React from 'react';
import Button from '../../components/Button/Button';

import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">비밀번호를 입력하세요.</legend>
        <div className="passwordContainter">
          <input type="password" className="password" placeholder="비밀번호" />
          <i class="fa-regular fa-eye" />
        </div>
        <p className="searchPassword">비밀번호 찾기</p>
        <Button text="로그인" />
      </form>
    </div>
  );
};

export default Login;
