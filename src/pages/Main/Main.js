import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import './Main.scss';

const Main = () => {
  const video = useRef(null);

  const handleVideoFaster = () => {
    video.current.playbackRate = 1.2;
  };

  return (
    <div className="main">
      <div className="mainBox">
        <video
          src="/videos/mainVid.mp4"
          ref={video}
          onPlay={handleVideoFaster}
          autoPlay
          muted
          loop
          playsinline
        />
        <div className="mainVidDescription">
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
        <img className="mainImg" alt="mainImg" src="/images/main.png" />
        <div className="mainVidDescription">
          <h2 className="descriptionTitle">A FEEL FOR EVERY YOU</h2>
          <p className="descriptionText">
            몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.
          </p>
          <p className="descriptionText">
            머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는
            에너지를 만들 수 있어요.
          </p>
          <p className="descriptionText">
            지금 나를 위한 모든 가능성을 느껴보세요.
          </p>
          <div className="buttonContainer">
            <Link to="/productList">
              <Button className="button" text="자세히 보기" />
            </Link>
            <Link to="/productDetail">
              <Button className="button" text="구매하기" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
