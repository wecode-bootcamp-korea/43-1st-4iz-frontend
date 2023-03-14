import React, { useState } from 'react';
import './DetailInfo.scss';

const DetailInfo = ({ info }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className="detailInfo"
      onClick={() => {
        setIsHidden(!isHidden);
      }}
    >
      <div className="detailInfoTitle">
        <h4>{info.title}</h4>
        {isHidden ? (
          <i className="fa-solid fa-caret-down" />
        ) : (
          <i className="fa-solid fa-caret-up" />
        )}
      </div>
      {isHidden ? (
        <p>더보기</p>
      ) : (
        <div className="detailInfoContent">
          <ul className="detailInfoList">
            {info.content.map((list, i) => {
              return <li key={`${list}${i}`}>{list}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailInfo;
