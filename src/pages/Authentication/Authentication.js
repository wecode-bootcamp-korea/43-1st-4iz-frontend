import React from 'react';
import './Authentication.scss';
import Button from '../../components/Button/Button';

const Authentication = () => {
  return (
    <div className="authentication">
      <form className="authenticationForm">
        <img src="images/nike.png" alt="logo" className="logoImage" />
        <header className="authenticationHeader">
          <legend className="formTitle">휴대폰 번호를 인증하세요</legend>
          <p>
            안전한 구매와 추가 보안 조치를 위해, 일회성 인증코드를 전송합니다.
          </p>
        </header>
        {/* FIXME : email 페이지에서 입력된 데이터가 보여질 부분으로, 추 후 추가하도록 하겠습니다 */}
        <div className="authenticationContainter">
          <fieldset className="phoneContainer">
            <label className="phoneTitle">휴대폰 번호</label>
            <input
              type="tel"
              className="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+82"
            />
            <i class="fa-solid fa-arrow-right" />
          </fieldset>
          <input type="text" className="checkCode" placeholder="코드" />
          <label className="termsAgree">
            <input type="checkbox" />
            &#91;선택&#93; 생일 프로모션 코드, 맴버전용 혜택등을 위해, SMS를
            통한 광고 수신 및 그에 따른 개인정보 이용에 동의합니다.
          </label>
        </div>
        <div className="buttonContainer">
          <p>다른계정으로 로그인하기</p>
          <Button text="계속" />
        </div>
      </form>
    </div>
  );
};

export default Authentication;

// signup 파일명, authentication scss 파일 어디?, asset 폴더 어디?
