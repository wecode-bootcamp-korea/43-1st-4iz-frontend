import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('./data/productData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
  }, []);

  return (
    <>
      {dataList.map(info => {
        return (
          <main className="productDetail" key={info.id}>
            <aside className="productImageContainer">
              <div className="productMainImg">
                <img src={`${info.image[0].src}`} alt="선택된 이미지" />
              </div>
            </aside>
            <div className="productImageGallery">
              <ul>
                {info.image.map(list => (
                  <li
                    key={list.id}
                    className="imageBox"
                    style={{ backgroundImage: `url(${list.src})` }}
                  />
                ))}
              </ul>
            </div>
            <section className="productInfo">
              <header className="productInfoTitle" key={info.id}>
                <h3>{info.name}</h3>
                <p className="subCategory">{info.categoty}</p>
                <p className="productPrice">{info.price}원</p>
              </header>
              <div className="selectColor">
                {info.colorChart.map(list => {
                  return (
                    <button
                      key={list.id}
                      type="button"
                      className="colorButton"
                      style={{ backgroundColor: `${list.color}` }}
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
                  {info.sizeChart.map(info => (
                    <Button key={info.id} text={info.size} />
                  ))}
                </div>
                <Button text="장바구니" />
              </div>
              <CartCard
                name={info.name}
                size={info.sizeChart[0].size}
                color={info.colorChart[1].color}
                price={info.price}
              />
              <CartCard
                name={info.name}
                size={info.sizeChart[7].size}
                color={info.colorChart[0].color}
                price={info.price}
              />
              <div className="detailInfo">
                <div className="detailInfoTitle">
                  <h4>상품 상세 정보 보기</h4>
                  <i class="fa-solid fa-caret-up" />
                </div>
                <div className="detailInfoContent">
                  <p>{info.detailInfo}</p>
                  <ul className="detailInfoList">
                    <li>현재 컬러: {info.colorChart[0].color}</li>
                  </ul>
                </div>
              </div>
              <div className="detailInfo">
                <div className="detailInfoTitle">
                  <h4>무료 배송 및 반품</h4>
                  <i classNmae="fa-solid fa-caret-up" />
                </div>
                <div className="detailInfoContent">
                  <p>일반 배송</p>
                  <ul className="detailInfoList">
                    <li>배송지역: 전국 (일부 지역 제외)</li>
                    <li>배송비: 무료배송</li>
                    <li>
                      제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품
                      서비스가 가능합니다.
                    </li>
                  </ul>
                  <p>일반 배송 자세히 알아보기</p>
                  <p>반품 자세히 알아보기</p>
                </div>
              </div>
              <div className="detailInfo">
                <div className="detailInfoTitle">
                  <h4>추가 정보</h4>
                  <i classNmae="fa-solid fa-caret-up" />
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
                      A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어
                      고객센터 / 080-022-0182
                    </li>
                    <li>
                      세탁방법 및 취급시 주의사항: 자세한 내용은 '자세히 보기'를
                      클릭하여 확인 부탁드립니다.
                    </li>
                    <li>
                      미성년자 권리 보호 안내: 자세한 내용은 '자세히 보기' 를
                      클릭하여 확인 부탁드립니다.
                    </li>
                    <li>
                      품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후
                      6개월), 가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에
                      이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거
                      보상하여 드립니다. 단, 제품에 부착되어 있는 사용방법 및
                      취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자
                      부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지
                      않습니다.
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
      })}
    </>
  );
};

export default ProductDetail;
