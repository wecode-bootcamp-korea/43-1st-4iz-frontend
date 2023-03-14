import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_DATA, SUB_NAV_LIST } from './navData';

import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <Link className="nikeLogo" to="/">
          <img alt="nikeLogo" src="/images/nike.png" />
        </Link>
        <div className="navText">
          {NAV_DATA.map(({ id, url, menu }) => {
            return (
              <div className="navTextList" key={id}>
                <Link to={url}>{menu}</Link>
              </div>
            );
          })}
          <div className="subNav">
            <div className="subNavContainer">
              {SUB_NAV_LIST.map(({ id, title, category }) => {
                return (
                  <dl key={id} className="detailCategory">
                    <dt>{title}</dt>
                    {category.map(({ id, list }) => {
                      return <dd key={id}>{list}</dd>;
                    })}
                  </dl>
                );
              })}
            </div>
          </div>
        </div>
        <div className="iconContainer">
          <div className="searchContainer focused">
            <i class="fa-solid fa-magnifying-glass" />
            <input
              className="searchInput focused"
              type="text"
              placeholder="검색"
            />
          </div>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </Link>
          <Link to="/account">
            <i class="fa-solid fa-user" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
