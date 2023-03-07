import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">비밀번호를 입력하세요.</legend>
        <input type="password" placeholder="비밀번호" />
        <p className="searchPassword">비밀번호 찾기</p>
        {/* button component 자리 */}
      </form>
    </div>
  );
};

export default Login;
