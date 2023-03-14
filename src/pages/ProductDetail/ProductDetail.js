import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import DetailInfo from '../../components/Detailnfo/DetailInfo';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [addOption, setAddOption] = useState([]);

  // 사용자가 선택한 option
  const selectedOption = { size, color };
  console.log('📍 addOption: ', addOption);
  console.log('productOption: ', selectedOption);

  const isAllSeleted = Object.entries(selectedOption).every(
    ([key, value]) => value
  );

  const addSelectedOption = e => {
    if (isAllSeleted) {
      setAddOption([...addOption, { text: e.target.value, num: 1 }]);
    }
  };

  const handleImageSrc = e => {
    setImageSrc(e.target.value);
  };

  const handleSelectColor = e => {
    setColor(e.target.value);
  };

  const handleSelectSize = e => {
    setSize(e.target.value);
  };

  useEffect(() => {
    fetch('./data/productData.json')
      .then(res => res.json())
      .then(data => {
        setDataList(data);
        setLoading(false);
        setImageSrc(`${data.images[0]}`);
      });
  }, []);

  if (loading) return <>Loading.... </>;

  return (
    <main className="productDetail">
      <aside className="productImageContainer">
        <div className="productMainImg">
          <img src={`${imageSrc}`} alt="선택된 이미지" />
        </div>
        <div className="productImageGallery">
          <div>
            {dataList.images.map((src, i) => (
              <button
                onClick={handleImageSrc}
                key={`${src}${i}`}
                className="imageBox"
                value={src}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </aside>

      <section className="productInfo">
        <header className="productInfoTitle">
          <h3>{dataList.name}</h3>
          <p className="subCategory">
            {dataList.categories.map((info, i) => {
              return <span key={`${info}${i}`}>{info}&nbsp;&nbsp;</span>;
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
                onClick={e => {
                  handleSelectColor(e);
                }}
                key={`${info}${i}`}
                type="button"
                value={info}
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
              <button
                onClick={e => {
                  handleSelectSize(e);
                  addSelectedOption(e);
                }}
                key={`${info}${i}`}
                text={info}
                value={info}
              >
                {info}
              </button>
            ))}
          </div>
          <Button text="장바구니" />
        </div>
        {/* {isAllSeleted && (
          <CartCard
            name={dataList.name}
            size={size}
            color={color}
            price={Number(dataList.price).toLocaleString()}
          />
        )} */}
        {addOption.map(value => (
          <CartCard
            key={dataList.name}
            name={dataList.name}
            size={size}
            color={color}
            price={Number(dataList.price).toLocaleString()}
          />
        ))}
        {PRODUCT_INFORMATION_INFO.map(info => {
          return <DetailInfo key={info.id} info={info} />;
        })}
      </section>
    </main>
  );
};

export default ProductDetail;

const PRODUCT_INFORMATION_INFO = [
  {
    id: 1,
    title: '상품 상세 정보 보기',
    content: [
      '빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은 사랑을 받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된 오버레이와 깔끔한 마감 처리, 과하지 않은 딱 절제된 화려함으로 빛나는 존재감을 발휘해 보세요.',
      '컬러 상세: gray',
    ],
  },
  {
    id: 2,
    title: '무료 배송 및 반품',
    content: [
      '배송지역: 전국 (일부 지역 제외)',
      '배송비: 무료배송',
      '제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.',
    ],
  },
  {
    id: 3,
    title: '추가 정보',
    content: [
      '빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은 사랑을 받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된 오버레이와 깔끔한 마감 처리, 과하지 않은 딱 절제된 화려함으로 빛나는 존재감을 발휘해 보세요.현재 컬러: gray',
      '배송지역: 전국 (일부 지역 제외)배송비: 무료배송제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.',
      '세탁방법 및 취급시 주의사항: 자세한 내용은 "자세히 보기"를 클릭하여 확인 부탁드립니다.',
      '미성년자 권리 보호 안내: 자세한 내용은 "자세히 보기"를 클릭하여 확인 부탁드립니다.',
    ],
  },
];
