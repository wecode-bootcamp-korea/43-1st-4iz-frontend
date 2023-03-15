import React from 'react';
import './CartCard.scss';

const CartCard = props => {
  const { id, name, size, color, quantity, price, actions } = props;
  const { increaseQuantity, decreaseQuantity } = actions;
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
          <button type="button" onClick={quantity > 0 && decreaseQuantity(id)}>
            -
          </button>
          <div className="countInputText">{quantity}</div>
          <button type="button" onClick={increaseQuantity(id)}>
            +
          </button>
        </div>
        <p className="selectedPrice">{(price * quantity).toLocaleString()}원</p>
        <i className="fa-solid fa-xmark" />
      </div>
    </div>
  );
};

export default CartCard;
