import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <section className="mainContentsWrap">
        <img
          src="/images/mainBgWhite.png"
          className="mainBgImg"
          alt="mainBgImg"
        />
        <div className="mainContentsAnime">
          <div className="card">
            <div className="circle" />
            <div className="content">
              <h2># MAXXED OUT</h2>
              <h4>시대를 초월한 에어맥스</h4>
              <br />
              <p>
                나이키 에어맥스. 수많은 실패, 그리고 무한한 가능성. 시대를
                초월한 에어맥스 스타일과 새로운 MAXXED OUT 팩을 만나 보세요.
              </p>
              <br />
              <Link to="/productDetail">구매하기</Link>
              <br />
              <br />
              <p>NIKE AIRMAX</p>
            </div>
            <img
              src="/images/mainShoeImg.png"
              className="mainShoeImg"
              alt="mainShoeImg"
            />
          </div>
        </div>
      </section>

      <section className="mainContainer">
        <div className="mainDescription">
          <h6 className="descriptionSubtitle">에어맥스 with 지올팍</h6>
          <h2 className="descriptionTitle">시대를 초월한 에어맥스</h2>
          <p className="descriptionText">
            나이키 에어맥스. 수많은 실패, 그리고 무한한 가능성.
          </p>
          <p className="descriptionText">
            시대를 초월한 에어맥스 스타일과 새로운 MAXXED OUT 팩을 만나 보세요.
          </p>
          <Link to="/productDetail">
            <Button className="button" text="구매하기" />
          </Link>
        </div>
      </section>

      <section className="mainDragSection">drag</section>
    </div>
  );
};

export default Main;
