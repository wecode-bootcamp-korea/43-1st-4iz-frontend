import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import nikeLogo from '../../assets/Nav/nike.png';

const Nav = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch('/data/navData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNavData(data);
      });
  });

  return (
    <div className="nav">
      <div className="navContainer">
        <Link className="nikeLogo" to="/">
          <img alt="nikeLogo" src={nikeLogo} />
        </Link>
        <div className="navText">
          {navData.map(info => {
            return (
              <div className="navTextList" key={info.id}>
                <Link to={info.url}>{info.menu}</Link>
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
