import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { EMAIL, LOGIN, SIGNUP, SUCCESS, MAIL_OPTION } from './AccountList';
import './Account.scss';

const Account = () => {
  const [accountDataName, setAccountDataName] = useState(EMAIL);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [check, setCheck] = useState('');
  const [birthday, setBirthday] = useState('');
  const [select, setSelect] = useState('');

  const navigate = useNavigate();

  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };
  const saveUserName = e => {
    setName(e.target.value);
  };
  const saveUserTel = e => {
    setTel(e.target.value);
  };
  const saveChecked = e => {
    setCheck(e.target.checked);
  };
  const saveBirthday = e => {
    setBirthday(e.target.value);
  };
  const saveSelect = e => {
    setSelect(e.target.value);
  };

  const loginTest = e => {
    // e.preventDefault();

    fetch('http://10.58.52.181:3000/users/duplicate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: `${id}@${select}`,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (accountDataName === EMAIL) {
          if (data.message === 'NEW_USER') {
            setAccountDataName(SIGNUP);
          } else if (data.message === 'EXISTING_USER') {
            localStorage.setItem('token', data.accessToken);
            setAccountDataName(LOGIN);
          } else alert('fail');
        }
      });
  };

  const handleAccountTest = () => {
    console.log(accountDataName[0].name);
    if (accountDataName[0].name === 'email') {
      loginTest();
    } else {
      signUpTest();
    }
  };

  const signUpTest = e => {
    // e.preventDefault();

    console.log(`${id}@${select}`);

    fetch('http://10.58.52.181:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: `${id}@${select}`,
        password: pw,
        name: name,
        phoneNumber: tel,
        birthday: birthday,
      }),
    })
      .then(response => response.json())
      .then(() => {
        const pwRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,15})/;
        const telRegExp = /^([0-9]{3})[-]([0-9]{4})[-][0-9]{4}$/; // 하이픈 포함

        if (accountDataName === SIGNUP) {
          (name || tel || pw) &&
          telRegExp.test(tel) &&
          pwRegExp.test(pw) &&
          check &&
          birthday
            ? setAccountDataName(SUCCESS)
            : alert('입력한 내용을 다시 확인해주세요');
        }
      });
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
              onChange={saveUserId}
            />
            <span>@</span>
            <select className="emailAdress" onChange={saveSelect}>
              {MAIL_OPTION.map(({ id, domain }) => (
                <option key={id} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
        )}
        {accountDataName[0].name === 'login' && (
          <div className="passwordContainter">
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
              value={pw}
              onChange={saveUserPw}
            />
            <i className="fa-regular fa-eye" />
          </div>
        )}
        {accountDataName[0].name === 'signup' && (
          <div className="signupContainter">
            <input
              type="text"
              placeholder="이름"
              className="name"
              value={name}
              onChange={saveUserName}
            />
            <input
              type="tel"
              className="phone"
              pattern="/^([0-9]{3})[-]([0-9]{4})[-][0-9]{4}$/"
              placeholder="전화번호"
              value={tel}
              onChange={saveUserTel}
            />
            <div className="pwContainer">
              <input
                type="password"
                className="pw"
                placeholder="비밀번호"
                value={pw}
                onChange={saveUserPw}
              />
              <i className="fa-regular fa-eye" />
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
              value={birthday}
              onChange={saveBirthday}
            />
            <p className="birthRules">생일에 나이키 멤버 리워드를 받으세요.</p>

            <label className="termsAgree">
              <input type="checkbox" onClick={saveChecked} />
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
