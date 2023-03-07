import React from 'react';
import './Email.scss';

const Email = () => {
  return (
    <div className="email">
      <form className="emailForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">
          가입 또는 로그인을 위해 이메일을 입력하세요.
        </legend>
        <div className="emailContainer">
          <input type="email" placeholder="이메일" />
          <p>@</p>
          <select>
            {MAIL_OPTION.map(option => (
              <option key={option.id} value={option.domain}>
                {option.domain}
              </option>
            ))}
          </select>
        </div>
        <p className="emailTerms">
          계속 진행하면 나이키의 개인 정보 처리 방침 및 이용약관에 동의하게
          됩니다.
        </p>
        <button type="button" className="emailSubmitBtn">
          계속
        </button>
      </form>
    </div>
  );
};

export default Email;

const MAIL_OPTION = [
  { id: 1, domain: '이메일을 선택하세요' },
  { id: 2, domain: 'naver.com' },
  { id: 3, domain: 'nate.com' },
  { id: 4, domain: 'daum.net' },
  { id: 5, domain: 'googole.com' },
  { id: 6, domain: 'hamail.net' },
];
