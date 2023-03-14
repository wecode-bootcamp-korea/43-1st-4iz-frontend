import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SUBMENU_LIST,
  GENDER_LIST,
  COLOR_LIST,
  SIZE_LIST,
  PRODUCT_DROPDOWN,
} from './filterData';
import ProductCard from '../../components/ProductCard/ProductCard';
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

  const SUBMENU = SUBMENU_LIST.map(({ id, title }) => {
    return (
      <Link to="/productList" key={id}>
        <li className="categoryMenu">{title}</li>
      </Link>
    );
  });

  const GENDER = GENDER_LIST.map(({ id, gender }) => {
    return (
      <dd className={`checkboxContainer ${gender}`} key={id}>
        <input id={id} className="checkbox" type="checkbox" />
        <i className="fa-solid fa-check" />
        <label for={id} className="checkboxText">
          {gender}
        </label>
      </dd>
    );
  });

  const COLOR = COLOR_LIST.map(({ id, name }) => {
    return (
      <div key={id} className="colorButtonContainer">
        <button className={`colorButton ${name}`} />
      </div>
    );
  });

  const SIZE = SIZE_LIST.map(({ id, size }) => {
    return (
      <button key={id} className="sizeButton">
        {size}
      </button>
    );
  });

  const DROPDOWN = PRODUCT_DROPDOWN.map(({ id, option }) => {
    return <option key={id}>{option}</option>;
  });

  const productGrid = productData.map(({ id, img_url, name, price }) => {
    return <ProductCard key={id} img_url={img_url} name={name} price={price} />;
  });

  return (
    <div className="productList">
      <div className="productListContainer">
        <div className="filter">
          <h3 className="menu">남성 신발</h3>
          <ul className="category">{SUBMENU}</ul>
          <dl className="filterContainer gender">
            <dt className="filterTitle">성별</dt>
            {GENDER}
          </dl>
          <dl className="filterContainer color">
            <dt className="filterTitle">색상</dt>
            <div className="colorListContainer">{COLOR}</div>
          </dl>
          <dl className="filterContainer size">
            <dt className="filterTitle">사이즈</dt>
            <dd className="sizeButtonContainer">{SIZE}</dd>
          </dl>
        </div>
        <div className="productListBoard">
          <select className="productDropdown">{DROPDOWN}</select>
          <div className="productListGrid">{productGrid}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
