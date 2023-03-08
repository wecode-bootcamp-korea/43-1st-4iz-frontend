import React from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <main className="productDetail">
      <aside className="productImageContainer">
        <div className="productMainImg">
          <img src="/images/airforce_1.jpg" alt="선택된 이미지" />
        </div>
      </aside>
      <div className="productImageGallery">
        <ul>
          {PRODUCT_IMAGE_LIST.map(list => (
            <li
              key={list.id}
              className="imageBox"
              style={{ backgroundImage: `url(${list.img})` }}
            />
          ))}
        </ul>
      </div>
      <section className="productInfo">
        <header className="productInfoTitle">
          <h3>나이키 에어 포스 1 '07</h3>
          <p className="subCategory">남성 신발</p>
          <p className="productPrice">139,000원</p>
        </header>
        <div class="selectSize">
          <div className="selectSizeTitle">
            <h4>사이즈 선택 </h4>
            <span>사이즈 가이즈</span>
          </div>
          <div className="selectSizeOption">
            {SELECT_SIZE_OPTION.map(info => (
              <Button key={info.id} text={info.size} />
            ))}
          </div>
          <Button text="장바구니" />
        </div>
        <CartCard
          name="나이키 에어 포스 1 '07"
          size="270"
          color="white"
          price="139,000"
        />
        <CartCard
          name="나이키 에어 포스 1 '07"
          size="275"
          color="gray"
          price="139,000"
        />
        <div className="detailInfo">
          <div className="detailInfoTitle">
            <h4>상품 상세 정보 보기</h4>
            <i class="fa-solid fa-caret-up" />
          </div>
          <div className="detailInfoContent">
            <p>
              빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은
              사랑을 받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치
              처리된 오버레이와 깔끔한 마감 처리, 과하지 않은 딱 절제된
              화려함으로 빛나는 존재감을 발휘해 보세요.
            </p>
            <ul className="detailInfoList">
              <li>현재 컬러: 화이트/화이트</li>
              <li>스타일: CW2288-111</li>
            </ul>
          </div>
        </div>
        <div className="detailInfo">
          <div className="detailInfoTitle">
            <h4>무료 배송 및 반품</h4>
            <i class="fa-solid fa-caret-up" />
          </div>
          <div className="detailInfoContent">
            <p>일반 배송</p>
            <ul className="detailInfoList">
              <li>배송지역: 전국 (일부 지역 제외)</li>
              <li>배송비: 무료배송</li>
              <li>
                제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가
                가능합니다.
              </li>
            </ul>
            <p>일반 배송 자세히 알아보기</p>
            <p>반품 자세히 알아보기</p>
          </div>
        </div>
        <div className="detailInfo">
          <div className="detailInfoTitle">
            <h4>추가 정보</h4>
            <i class="fa-solid fa-caret-up" />
          </div>
          <div className="detailInfoContent">
            <p>상품정보제공고시</p>
            <ul className="detailInfoList">
              <li>
                제조연월: 수입제품으로 각 상품별 입고 시기에 따라 상이하여
                정확한 제조연월 제공이 어렵습니다. 제조연월을 확인하시려면
                고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신
                제품의 라벨을 참고하시기 바랍니다.
              </li>
              <li>
                A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 /
                080-022-0182
              </li>
              <li>
                세탁방법 및 취급시 주의사항: 자세한 내용은 '자세히 보기'를
                클릭하여 확인 부탁드립니다.
              </li>
              <li>
                미성년자 권리 보호 안내: 자세한 내용은 '자세히 보기' 를 클릭하여
                확인 부탁드립니다.
              </li>
              <li>
                품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월),
                가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는
                제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다.
                단, 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라
                제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에
                대해서는 책임을 지지 않습니다.
              </li>
              <li>
                제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc /
                (유)나이키코리아
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;

const PRODUCT_IMAGE_LIST = [
  { id: '1', img: '/images/airforce_2.jpg', value: '이미지2' },
  { id: '2', img: '/images/airforce_3.jpg', value: '이미지3' },
  { id: '3', img: '/images/airforce_4.jpg', value: '이미지4' },
  { id: '4', img: '/images/airforce_1.jpg', value: '이미지4' },
  { id: '5', img: '/images/airforce_2.jpg', value: '이미지4' },
  { id: '6', img: '/images/airforce_3.jpg', value: '이미지4' },
];

const SELECT_SIZE_OPTION = [
  { id: '1', size: '240' },
  { id: '2', size: '245' },
  { id: '3', size: '250' },
  { id: '4', size: '255' },
  { id: '5', size: '260' },
  { id: '6', size: '265' },
  { id: '7', size: '270' },
  { id: '8', size: '275' },
  { id: '9', size: '280' },
  { id: '10', size: '290' },
  { id: '11', size: '295' },
  { id: '12', size: '300' },
  { id: '13', size: '305' },
  { id: '14', size: '310' },
  { id: '15', size: '315' },
];
