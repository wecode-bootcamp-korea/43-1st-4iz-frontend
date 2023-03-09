import React from 'react';
import './Email.scss';
import Button from '../../components/Button/Button';

const Email = () => {
  return (
    <div className="email">
      <form className="emailForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">
          가입 또는 로그인을 위해 이메일을 입력하세요.
        </legend>
        <div className="emailContainer">
          <input type="email" placeholder="이메일" className="emailId" />
          <span>@</span>
          <select className="emailAdress">
            {MAIL_OPTION.map(option => (
              <option key={option.id} value={option.domain}>
                {option.domain}
              </option>
            ))}
          </select>
        </div>
        <p className="terms">
          계속 진행하면 나이키의 개인 정보 처리 방침 및 이용약관에 동의하게
          됩니다.
        </p>
        <Button text="계속" />
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
  { id: 5, domain: 'gmail.com' },
  { id: 6, domain: 'hamail.net' },
];
