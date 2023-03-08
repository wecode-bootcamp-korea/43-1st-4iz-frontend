import React from 'react';
import './Signup.scss';
import Button from '../../components/Button/Button';

const Signup = () => {
  return (
    <div className="signup">
      <form className="signupForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">이제 나이키 멤버가 되어볼까요?</legend>
        <div className="signupContainter">
          <input type="text" placeholder="이름" className="name" />
          <div className="pwContainer">
            <input type="password" className="pw" placeholder="비밀번호" />
            <i class="fa-regular fa-eye" />
          </div>
          <div className="pwRules">
            <div className="pwLength">
              <i class="fa-solid fa-xmark" />
              <span>최소 8자</span>
            </div>
            <div className="pwCondition">
              <i class="fa-solid fa-xmark" />
              <span>알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자</span>
            </div>
          </div>
          <input type="date" className="birth" />
          <p className="birthRules">생일에 나이키 멤버 리워드를 받으세요.</p>
          <label className="termsAgree">
            <input type="checkbox" />
            나이키의 개인정보 처리 방침 및 이용약관에 동의합니다.
          </label>
        </div>
        <Button text="계정 만들기" />
      </form>
    </div>
  );
};

export default Signup;
