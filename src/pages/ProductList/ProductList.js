import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const url = location.search;

  // TODO: filter 백엔드 통신 코드입니다.
  // useEffect(() => {
  //   fetch(`http://10.58.52.223:3000/products/list${url}`)
  //     .then(response => response.json())
  //     .then(data => setProductData(data));
  // }, [url]);

  const setCategory = value => e => {
    if (e.target.value) {
      searchParams.set('category', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('category');
      searchParams.delete('category');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('category', value);
        });
      setSearchParams(searchParams);
    }
  };

  const setGender = value => e => {
    if (e.target.checked) {
      searchParams.append('gender', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('gender');
      searchParams.delete('gender');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('gender', value);
        });
      setSearchParams(searchParams);
    }
  };

  const setColor = value => e => {
    if (e.target.checked) {
      searchParams.append('color', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('color');
      searchParams.delete('color');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('color', value);
        });
      setSearchParams(searchParams);
    }
  };

  const setSize = value => e => {
    if (e.target.checked) {
      searchParams.append('size', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('size');
      searchParams.delete('size');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('size', value);
        });
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    fetch('/data/productListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  const SUBMENU = SUBMENU_LIST.map(({ id, title }) => {
    return (
      <button
        key={id}
        className="categoryMenu"
        value={title}
        onClick={setCategory(title)}
      >
        {title}
      </button>
    );
  });

  const GENDER = GENDER_LIST.map(({ id, gender }) => {
    return (
      <dd className={`checkboxContainer ${gender}`} key={id}>
        <input
          id={id}
          className="checkbox"
          type="checkbox"
          onChange={setGender(gender)}
        />
        <i className="fa-solid fa-check" />
        <label htmlFor={id} className="checkboxText">
          {gender}
        </label>
      </dd>
    );
  });

  const COLOR = COLOR_LIST.map(({ id, name }) => {
    return (
      <div key={id} className="colorButtonContainer">
        <input
          type="checkbox"
          className="colorButton"
          value={name}
          onClick={setColor(name)}
        />
      </div>
    );
  });

  const SIZE = SIZE_LIST.map(({ id, size }) => {
    return (
      <div key={id} className="sizeButtonContainer" onClick={setSize(size)}>
        <input className="sizeButton" type="checkbox" value={size} />
        <span className="sizeButtonText">{size}</span>
      </div>
    );
  });

  const DROPDOWN = PRODUCT_DROPDOWN.map(({ id, option }) => {
    return <option key={id}>{option}</option>;
  });

  const productGrid = productData.map(
    ({
      id,
      name,
      images,
      price,
      gender,
      color_count: colorCount,
      discount_rate: discountRate,
    }) => {
      return (
        <ProductCard
          key={id}
          name={name}
          images={images}
          price={price}
          gender={gender}
          color_count={colorCount}
          discount_rate={discountRate}
        />
      );
    }
  );

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
