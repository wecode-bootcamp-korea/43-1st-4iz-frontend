import React from 'react';
import './ProductDetail.scss';
import Button from '../../components/Button/Button';

const ProductDetail = () => {
  return (
    <main className="productDetail">
      <aside className="productImageContainer">
        <div className="productMainImg">
          <img src="/images/airforce_1.jpg" alt="상품 메인 이미지" />
        </div>
        <div className="productImageGallery">
          {PRODUCT_IMAGE_LIST.map(list => (
            <ul className="productImageGallery" key={list.id}>
              <li
                className="imageBox"
                style={{ backgroundImage: `${list.img}` }}
              />
            </ul>
          ))}
        </div>
      </aside>
      <section className="productInfo">
        <header className="productInfoTitle">
          <h3>나이키 에어 포스 1 '07</h3>
          <p>남성 신발</p>
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
      </section>
    </main>
  );
};

export default ProductDetail;

const PRODUCT_IMAGE_LIST = [
  { id: '1', img: '/images/airforce_2.jpg', value: '이미지2' },
  { id: '2', img: '/images/airforce_3.jpg', value: '이미지3' },
  { id: '3', img: '/images/airforce_4.jpg', value: '이미지4' },
  { id: '4', img: '/images/airforce_4.jpg', value: '이미지4' },
  { id: '5', img: '/images/airforce_4.jpg', value: '이미지4' },
  { id: '6', img: '/images/airforce_4.jpg', value: '이미지4' },
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
