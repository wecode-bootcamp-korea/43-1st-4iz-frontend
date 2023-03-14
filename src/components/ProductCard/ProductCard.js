import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ id, img_url, name, price }) => {
  return (
    <div className="productCard" key={id}>
      <img className="productCardImg" alt="productCardImg" src={img_url} />
      <div className="productCardText">
        <div className="productName">{name}</div>
        <div className="productPrice">{price} 원</div>
      </div>
    </div>
  );
};

export default ProductCard;
