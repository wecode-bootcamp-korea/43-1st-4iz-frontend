import React, { useState } from 'react';
import './CartCard.scss';

const CartCard = ({ name, color, size, price }) => {
  const [count, setCount] = useState(1);
  const totalPrice = Number(price * count);

  return (
    <div className="cartCard">
      <div className="cartInfo">
        <h4>{name}</h4>
        {/* FIXME : The above error occurred in the p component 에러 수정 시 추가 될 부분 */}
        {/* <p className="selectedOption">
          {size} / {color}
        </p> */}
      </div>
      <div className="addCart">
        <div className="count">
          <button
            type="button"
            onClick={() => {
              count > 1 && setCount(count - 1);
            }}
          >
            -
          </button>
          <div className="countInputText">{count}</div>
          <button
            type="button"
            onClick={() => {
              count < 5 && setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <p className="selectedPrice">{totalPrice.toLocaleString()}원</p>
        <i
          className="fa-solid fa-xmark"
          onClick={e => {
            e.terget.remove();
          }}
        />
      </div>
    </div>
  );
};

export default CartCard;
