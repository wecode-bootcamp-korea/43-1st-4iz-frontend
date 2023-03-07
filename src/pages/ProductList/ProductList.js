import React, { useEffect, useState } from 'react';

import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  });

  return (
    <div className="productList">
      <div className="filterContainer">
        <dl className="filter">
          <dt>남성 신발</dt>
          <dd className="category">카테고리</dd>
          <dd className="gender">남여</dd>
          <dd className="color">색상</dd>
          <dd className="color">사이즈</dd>
        </dl>
        <div className="productListBoard">
          {productData.map(info => {
            return (
              <div className="productBox" key={info.id}>
                <div className="productBoxImg" />
                <img
                  className="productImg"
                  alt="productImg"
                  src={info.img_url}
                />
                <div className="productBoxText">
                  <div className="productName">{info.name}</div>
                  <div className="productPrice">{info.price} 원</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
