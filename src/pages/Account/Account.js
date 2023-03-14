import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { EMAIL, LOGIN, SIGNUP, SUCCESS, MAIL_OPTION } from './AccountList';
import './Account.scss';

const Account = () => {
  const [accountDataName, setAccountDataName] = useState(EMAIL);
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

  const navigate = useNavigate();

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
          setAccountDataName(SIGNUP);
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
        data.accessToken ? navigate('/') : alert('check pw');
      });
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
          <div className="passwordContainter">
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
              value={pw}
              name="pw"
              onChange={onChangeUserInfo}
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
              name="name"
              value={name}
              onChange={onChangeUserInfo}
            />
            <input
              type="tel"
              className="phone"
              pattern="/^([0-9]{3})[-]([0-9]{4})[-][0-9]{4}$/"
              placeholder="전화번호"
              name="tel"
              value={tel}
              onChange={onChangeUserInfo}
            />
            <div className="pwContainer">
              <input
                type="password"
                className="pw"
                placeholder="비밀번호"
                name="pw"
                value={pw}
                onChange={onChangeUserInfo}
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

// const [id, setId] = useState('');
// const [pw, setPw] = useState('');
// const [name, setName] = useState('');
// const [tel, setTel] = useState('');
// const [check, setCheck] = useState('');
// const [birthday, setBirthday] = useState('');
// const [select, setSelect] = useState('');

// const [accountDataName, setAccountDataName] = useState(EMAIL);

// const navigate = useNavigate();

// const saveUserId = e => {
//   setId(e.target.value);
// };
// const saveUserPw = e => {
//   setPw(e.target.value);
// };
// const saveUserName = e => {
//   setName(e.target.value);
// };
// const saveUserTel = e => {
//   setTel(e.target.value);
// };
// const saveChecked = e => {
//   setCheck(e.target.checked);
// };
// const saveBirthday = e => {
//   setBirthday(e.target.value);
// };
// const saveSelect = e => {
//   setSelect(e.target.value);
// };
