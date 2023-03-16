import React from 'react';
import './ProductCard.scss';

const ProductCard = ({
  id,
  name,
  price,
  images,
  gender,
  color_count,
  discount_rate,
}) => {
  return (
    <div className="productCard" key={id}>
      <img className="productCardImg" alt="productCardImg" src={images[0]} />
      <div className="productCardText">
        <div className="productName">{name}</div>
        <div className="gender">{gender} 신발</div>
        <div className="colorCount">{color_count}개 색상</div>
        {discount_rate ? (
          <div>
            <div className="priceContainer">
              <span className="discountedPrice">
                {Number(price - price * (discount_rate / 100)).toLocaleString()}{' '}
                원
              </span>
              <del className="productPrice">
                {Number(price).toLocaleString()} 원
              </del>
            </div>
            <div className="discountRate">{discount_rate}% 할인</div>
          </div>
        ) : (
          <div>
            <div className="priceContainer">
              <span className="discountedPrice">
                {Number(price).toLocaleString()} 원
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
