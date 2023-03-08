import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SUBMENU_LIST, GENDER_LIST, COLOR_LIST, SIZE_LIST } from './filterData';

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
      <div className="productListContainer">
        <div className="filter">
          <h3 className="menu">남성 신발</h3>
          <ul className="category">
            {SUBMENU_LIST.map(({ id, title }) => {
              return (
                <Link to="/productList" key={id}>
                  <li className="categoryMenu">{title}</li>
                </Link>
              );
            })}
          </ul>
          <dl className="filterContainer gender">
            <dt className="filterTitle">성별</dt>
            {GENDER_LIST.map(({ id, gender }) => {
              return (
                <dd className={`checkboxContainer ${gender}`} key={id}>
                  <input className="checkbox" type="checkbox" />
                  <span className="checkboxText">{gender}</span>
                </dd>
              );
            })}
          </dl>
          <dl className="filterContainer color">
            <dt className="filterTitle">색상</dt>
            <div className="colorListContainer">
              {COLOR_LIST.map(({ id, name, color }) => {
                return (
                  <dd className="colorList" key={id}>
                    <button
                      className="colorButton"
                      style={{ backgroundColor: `${color}` }}
                    />
                    <p className="colorName">{name}</p>
                  </dd>
                );
              })}
            </div>
          </dl>
          <dl className="filterContainer size">
            <dt className="filterTitle">사이즈</dt>
            <dd className="sizeButtonContainer">
              {SIZE_LIST.map(({ id, size }) => {
                return (
                  <div key={id}>
                    <button className="sizeButton">{size}</button>
                  </div>
                );
              })}
            </dd>
          </dl>
        </div>
        <div className="productListBoard">
          <select className="productDropdown">
            <option value="">정렬 기준</option>
            <option value="최신순">최신순</option>
            <option value="낮은 가격순">낮은 가격순</option>
            <option value="높은 가격순">높은 가격순</option>
          </select>
          <div className="productListGrid">
            {productData.map(({ id, img_url, name, price }) => {
              return (
                <div className="productBox" key={id}>
                  <div className="productBoxImg" />
                  <img className="productImg" alt="productImg" src={img_url} />
                  <div className="productBoxText">
                    <div className="productName">{name}</div>
                    <div className="productPrice">{price} 원</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
