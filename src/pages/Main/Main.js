import React, { useRef } from 'react';
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
          src="/videos/mainVid1.mp4"
          ref={video}
          onPlay={handleVideoFaster}
          autoPlay
          muted
          loop
          playsinline
        />
        <div className="mainVid1Description">
          <h6>에어맥스 with 지올팍</h6>
          <h3>시대를 초월한 에어맥스</h3>
          <p>나이키 에어맥스. 수많은 실패, 그리고 무한한 가능성.</p>
          <p>
            시대를 초월한 에어맥스 스타일과 새로운 MAXXED OUT 팩을 만나 보세요.
          </p>
        </div>

        <img className="mainImg2" alt="mainImg" src="/images/main1.png" />
        <div className="mainVid1Description">
          <h3>A FEEL FOR EVERY YOU</h3>
          <p>몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.</p>
          <p>
            머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는
            에너지를 만들 수 있어요.
          </p>
          <p>지금 나를 위한 모든 가능성을 느껴보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
