import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/productData.json')
      .then(res => res.json())
      .then(data => {
        setDataList(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <>Loading.... </>;

  return (
    <main className="productDetail">
      <aside className="productImageContainer">
        <div className="productMainImg">
          <img src={`${dataList.images[0]}`} alt="선택된 이미지" />
        </div>
      </aside>
      <div className="productImageGallery">
        <ul>
          {dataList.images.map((src, i) => (
            <li
              key={`${src}${i}`}
              className="imageBox"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </ul>
      </div>

      <section className="productInfo">
        <header className="productInfoTitle">
          <h3>{dataList.name}</h3>
          <p className="subCategory">
            {dataList.categories.map((info, i) => {
              return <span key={`${info}${i}`}>{info}/</span>;
            })}
          </p>
          <p className="productPrice">
            {Number(dataList.price).toLocaleString()}원
          </p>
        </header>
        <div className="selectColor">
          {dataList.color.map((info, i) => {
            return (
              <button
                key={`${info}${i}`}
                type="button"
                className={`colorButton ${info}`}
              />
            );
          })}
        </div>
        <div class="selectSize">
          <div className="selectSizeTitle">
            <h4>사이즈 선택 </h4>
            <span>사이즈 가이즈</span>
          </div>
          <div className="selectSizeOption">
            {dataList.size.map((info, i) => (
              <Button key={`${info}${i}`} text={info} />
            ))}
          </div>
          <Button text="장바구니" />
        </div>
        <CartCard
          name={dataList.name}
          size={dataList.size[0]}
          color={dataList.color[0]}
          price={Number(dataList.price).toLocaleString()}
        />
        <div className="detailInfo">
          <div className="detailInfoTitle">
            <h4>상품 상세 정보 보기</h4>
            <i class="fa-solid fa-caret-up" />
          </div>
          <div className="detailInfoContent">
            <p>{dataList.description}</p>
            <ul className="detailInfoList">
              <li>현재 컬러: {dataList.color[0]}</li>
            </ul>
          </div>
        </div>
        <div className="detailInfo">
          <div className="detailInfoTitle">
            <h4>무료 배송 및 반품</h4>
            <i className="fa-solid fa-caret-up" />
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
            <i className="fa-solid fa-caret-up" />
          </div>
          <div className="detailInfoContent">
            <p>상품정보제공고시</p>
            <ul className="detailInfoList">
              {PRODUCT_INFORMATION_INFO.map(info => {
                return <li key={info.id}>{info.content}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;

const PRODUCT_INFORMATION_INFO = [
  {
    id: 1,
    content:
      '제조연월: 수입제품으로 각 상품별 입고 시기에 따라 상이하여 정확한 제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을 참고하시기 바랍니다.',
  },
  {
    id: 2,
    content:
      'A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182',
  },
  {
    id: 3,
    content:
      '세탁방법 및 취급시 주의사항: 자세한 내용은 "자세히 보기"를 클릭하여 확인 부탁드립니다.',
  },
  {
    id: 4,
    content:
      '미성년자 권리 보호 안내: 자세한 내용은 "자세히 보기"를 클릭하여 확인 부탁드립니다.',
  },
  {
    id: 5,
    content:
      '품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월), 가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단, 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지않습니다.',
  },
  {
    id: 6,
    content:
      '제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc / (유)나이키코리아',
  },
];
