import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { EMAIL, LOGIN, SIGNUP, SUCCESS, MAIL_OPTION } from './AccountList';
import './Account.scss';
import pwRegExp from '../../Util/regex';
import telRegExp from '../../Util/regex';

const Account = () => {
  const navigate = useNavigate();
  const [accountDataName, setAccountDataName] = useState(EMAIL);
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    name: '',
    tel: '',
    check: '',
    birthday: '',
    domain: '',
  });

  const { id, pw, name, tel, check, birthday, domain } = userInfo;

  const isNameActive = name.length > 0 || !name;
  const isTelActive = telRegExp.test(tel) || !tel;
  const isPwActive = pwRegExp.test(pw) || !pw;

  const onChangeUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const checkDuplicate = e => {
    // e.preventDefault();
    fetch('http://10.58.52.223:3000/users/duplicate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: `${id}@${domain}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (!accountDataName === EMAIL) return;
        if (data.message === 'NEW_USER') {
          !id || !domain
            ? alert('이메일을 확인해주세요')
            : setAccountDataName(SIGNUP);
        } else {
          localStorage.setItem('token', data.accessToken);
          setAccountDataName(LOGIN);
        }
      });
  };

  const checkSignIn = e => {
    // e.preventDefault();
    fetch('http://10.58.52.223:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: `${id}@${domain}`,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        isPwActive && data.accessToken
          ? navigate('/')
          : alert('비밀번호를 확인해주세요');
      });
  };

  const handlePwVisible = () => {
    !isPwVisible ? setIsPwVisible(true) : setIsPwVisible(false);
  };

  const checkSignUp = e => {
    // e.preventDefault();
    fetch('http://10.58.52.223:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: `${id}@${domain}`,
        password: pw,
        name: name,
        phoneNumber: tel,
        birthday: birthday,
      }),
    })
      .then(response => response.json())
      .then(() => {
        if (accountDataName === SIGNUP) {
          if (
            isNameActive &&
            isTelActive &&
            isPwActive &&
            name &&
            tel &&
            pw &&
            telRegExp.test(tel) &&
            pwRegExp.test(pw)
          ) {
            setAccountDataName(SUCCESS);
          }
        } else if (accountDataName === SUCCESS) navigate('/');
      });
  };

  const handleAccountTest = () => {
    if (accountDataName[0].name === 'email') {
      checkDuplicate();
    } else if (accountDataName[0].name === 'login') {
      checkSignIn();
    } else {
      checkSignUp();
    }
  };

  return (
    <div className="account">
      <form className="accountForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <legend className="formTitle">{accountDataName[0].title}</legend>
        {accountDataName[0].name === 'email' && (
          <div className="emailContainer">
            <input
              type="text"
              placeholder="이메일"
              className="emailId"
              value={id}
              onChange={onChangeUserInfo}
              name="id"
            />
            <span>@</span>
            <select
              className="emailAdress"
              value={domain}
              onChange={onChangeUserInfo}
              name="domain"
            >
              {MAIL_OPTION.map(({ id, domain }) => (
                <option key={id}>{domain}</option>
              ))}
            </select>
          </div>
        )}
        {accountDataName[0].name === 'login' && (
          <div
            className={`passwordContainter ${isPwActive ? 'noAlert' : 'alert'}`}
          >
            <input
              type={isPwVisible ? 'text' : 'password'}
              className="password"
              placeholder="비밀번호"
              value={pw}
              name="pw"
              onChange={onChangeUserInfo}
            />
            <i
              className={`fa-regular ${
                isPwVisible ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={handlePwVisible}
            />
          </div>
        )}
        {accountDataName[0].name === 'signup' && (
          <div className="signupContainter">
            <input
              type="text"
              placeholder="이름"
              className={`name ${isNameActive ? 'noAlert' : 'alert'}`}
              name="name"
              value={name}
              onChange={onChangeUserInfo}
            />
            <input
              type="tel"
              className={`phone ${isTelActive ? 'noAlert' : 'alert'}`}
              pattern="/^([0-9]{3})[-]([0-9]{4})[-][0-9]{4}$/"
              placeholder="전화번호"
              name="tel"
              value={tel}
              onChange={onChangeUserInfo}
            />
            <div className={`pwContainer ${isPwActive ? 'noAlert' : 'alert'}`}>
              <input
                type={isPwVisible ? 'text' : 'password'}
                className="pw"
                placeholder="비밀번호"
                name="pw"
                value={pw}
                onChange={onChangeUserInfo}
              />
              <i
                className={`fa-regular ${
                  isPwVisible ? 'fa-eye-slash' : 'fa-eye'
                }`}
                onClick={handlePwVisible}
              />
            </div>
            <div className="pwRules">
              <div className="pwLength">
                <i className="fa-solid fa-xmark" />
                <span>최소 8자</span>
              </div>
              <div className="pwCondition">
                <i className="fa-solid fa-xmark" />
                <span>알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자</span>
              </div>
            </div>
            <input
              type="date"
              className="birth"
              name="birthday"
              value={birthday}
              onChange={onChangeUserInfo}
            />
            <p className="birthRules">생일에 나이키 멤버 리워드를 받으세요.</p>

            <label className="termsAgree">
              <input type="checkbox" onClick={onChangeUserInfo} />
              {accountDataName[0].contents}
            </label>
          </div>
        )}
        {accountDataName[0].name !== 'signup' && (
          <p className="terms">{accountDataName[0].contents}</p>
        )}
        <div onClick={handleAccountTest} className="btnContainer">
          <Button text={accountDataName[0].button} />
        </div>
      </form>
    </div>
  );
};

export default Account;
