import React from 'react';
import './CartCard.scss';

const CartCard = ({ name, size, color, price }) => {
  return (
    <div className="cartCard">
      <div className="cartInfo">
        <h4>{name}</h4>
        <p className="selectedOption">
          {size} / {color}
        </p>
      </div>
      <div className="addCart">
        <div className="count">
          <button type="button">-</button>
          <div className="countInputText">1</div>
          <button type="button">+</button>
        </div>
        <p className="selectedPrice">{price}원</p>
        <i className="fa-solid fa-xmark" />
      </div>
    </div>
  );
};

export default CartCard;
