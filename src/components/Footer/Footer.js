import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerMenu">
        <div className="footerMenuList">
          <ul className="info">
            <li className="title">새로운 소식</li>
            <li className="title">멤버가입</li>
            <li className="title">매장안내</li>
          </ul>
          <dl className="help">
            <dt className="title">도움말</dt>
            <dd className="subtitle">주문배송조회</dd>
            <dd className="subtitle">반품 정책</dd>
            <dd className="subtitle">결제 방법</dd>
            <dd className="subtitle">공지사항</dd>
            <dd className="subtitle">문의하기</dd>
          </dl>
          <dl className="about">
            <dt className="title">ABOUT NIKE</dt>
            <dd className="subtitle">소식</dd>
            <dd className="subtitle">채용</dd>
            <dd className="subtitle">투자자</dd>
            <dd className="subtitle">지속가능성</dd>
          </dl>
        </div>
        <div className="footerIcon">
          <i class="fa-brands fa-instagram" />
          <i class="fa-brands fa-twitter" />
          <i class="fa-brands fa-facebook" />
          <i class="fa-brands fa-youtube" />
        </div>
      </div>

      <div className="footerInfo">
        <div className="footerInfoTitle">
          <div className="footerInfoLocation">
            <i class="fa-solid fa-location-dot" />
            <span className="location">대한민국</span>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="footerInfoPolicy">
            <span>이용약관</span>
            <strong>개인정보처리방침</strong>
          </div>
        </div>
        <div className="footerInfoDetail">
          <div className="address">
            <p>
              (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
              멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
              통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068{' '}
              <u>사업자 정보 확인</u>
            </p>
            <p>
              고객센터 전화 문의 <u>080-022-0182</u> FAX 02-6744-5880 | 이메일
              <u>service@nike.co.kr</u> | 호스팅서비스사업자 (유)나이키코리아
            </p>
          </div>
          <div className="legal">
            <p>
              현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신
              한국결제네트웍스 유한회사의 구매안전 서비스(<u>결제대금예치</u>)를
              이용하실 수 있습니다.
            </p>
            <p>
              콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 <u>자세히 보기</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
