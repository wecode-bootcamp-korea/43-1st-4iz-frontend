import React from 'react';
import './Email.scss';

const Email = () => {
  return (
    <div className="email">
      <form>
        <img src="images/nike.png" alt="logo" />
        <legend>가입 또는 로그인을 위해 이메일을 입력하세요.</legend>
        <div className="emailContainer">
          <input type="email" placeholder="이메일" />
          <p>@</p>
          <select>
            <option value="">이메일을 선택하세요</option>
            <option value="naver.com">naver.com</option>
            <option value="nate.com">nate.com</option>
            <option value="daum.net">daum.net</option>
            <option value="google.com">google.com</option>
            <option value="hanmail.net">hanmail.net</option>
          </select>
        </div>
        <p>
          계속 진행하면 나이키의 개인 정보 처리 방침 및 이용약관에 동의하게
          됩니다.
        </p>
        <button type="button">계속</button>
      </form>
    </div>
  );
};

export default Email;
