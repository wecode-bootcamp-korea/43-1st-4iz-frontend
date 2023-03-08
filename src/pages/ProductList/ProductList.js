import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COLOR_LIST } from './filterData';

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
            <Link to="/productList">
              <li className="categoryMenu">라이프스타일</li>
            </Link>
            <Link to="/productList">
              <li className="categoryMenu">조던</li>
            </Link>
            <Link to="/productList">
              <li className="categoryMenu">러닝</li>
            </Link>
            <Link to="/productList">
              <li className="categoryMenu">농구</li>
            </Link>
            <Link to="/productList">
              <li className="categoryMenu">축구</li>
            </Link>
          </ul>
          <dl className="filterContainer gender">
            <dt className="filterTitle">성별</dt>
            <dd className="man">
              <input className="checkbox" type="checkbox" />
              <span>남성</span>
            </dd>
            <dd className="woman">
              <input className="checkbox" type="checkbox" />
              <span>여성</span>
            </dd>
            <dd className="unisex">
              <input className="checkbox" type="checkbox" />
              <span>유니섹스</span>
            </dd>
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
            <dd>225</dd>
            <dd>230</dd>
            <dd>235</dd>
            <dd>240</dd>
            <dd>245</dd>
          </dl>
        </div>
        <div className="productListBoard">
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
  );
};

export default ProductList;
