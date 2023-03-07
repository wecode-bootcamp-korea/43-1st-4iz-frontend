import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch('/data/navData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setNavData);
  });

  return (
    <div className="nav">
      <div className="navContainer">
        <Link className="nikeLogo" to="/">
          <img alt="nikeLogo" src="/images/nike.png" />
        </Link>
        <div className="navText">
          {navData.map(({ id, url, menu }) => {
            return (
              <div className="navTextList" key={id}>
                <Link to={url}>{menu}</Link>
              </div>
            );
          })}
        </div>
        <div className="iconContainer">
          <div className="searchContainer">
            <input className="searchInput" type="text" placeholder="검색" />
            <i class="fa-solid fa-magnifying-glass" />
          </div>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </Link>
          <Link to="/email">
            <i class="fa-solid fa-user" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
