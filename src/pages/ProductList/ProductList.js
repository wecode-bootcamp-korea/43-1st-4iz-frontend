import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  // const [sort, setSort] = useState(searchParams.get('sort'));

  const setGender = (value, e) => {
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

  const setSize = (value, e) => {
    if (e.target.value) {
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

  const setColor = (value, e) => {
    console.log(e.target.value);

    if (e.target.value) {
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

  useEffect(() => {
    fetch('/data/productListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  });

  // const handleChangeSort = e => {
  //   setSort(e.target.value);
  // };

  // useEffect(() => {
  //   searchParams.set('sort', sort);
  //   setSearchParams(searchParams);
  // }, [searchParams, setSearchParams, sort]);

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
        <input
          id={id}
          className="checkbox"
          type="checkbox"
          onChange={e => setGender(gender, e)}
        />
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
        <button
          className={`colorButton ${name}`}
          onClick={e => setColor(name, e)}
          value={name}
        />
      </div>
    );
  });

  const SIZE = SIZE_LIST.map(({ id, size }) => {
    return (
      <button
        key={id}
        className="sizeButton"
        onClick={e => setSize(size, e)}
        value={size}
      >
        {size}
      </button>
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

  // FIXME: filter test

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
