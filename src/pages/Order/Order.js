import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <h3 className="orderTitle">결제하기</h3>

      <div className="orderInfo">
        <div className="orderInfoList">
          <div className="delivery">
            <h3 className="deliveryTitle title">배송 옵션</h3>
            <fieldset className="deliveryContainer">
              <div className="deliveryInputContainer">
                <label>이름*</label>
                <input
                  type="text"
                  placeholder="이름"
                  className="deliveryInput"
                  required
                />
              </div>
              <div className="deliveryInputContainer">
                <label>도로명주소*</label>
                <input
                  type="text"
                  placeholder="도로명주소"
                  className="deliveryInput"
                  required
                />
              </div>
              <div className="deliveryInputContainer">
                <label>상세주소*</label>
                <input
                  type="text"
                  placeholder="상세주소"
                  className="deliveryInput"
                  required
                />
              </div>
              <div className="deliveryContact">
                <div className="deliveryInputContainer phoneContainer">
                  <label>휴대폰번호*</label>
                  <input
                    type="tel"
                    placeholder="휴대폰번호"
                    className="deliveryInput"
                    required
                  />
                </div>
                <div className="deliveryInputContainer emailContainer">
                  <label>이메일*</label>
                  <input
                    type="email"
                    placeholder="이메일"
                    className="deliveryInput"
                    required
                  />
                </div>
              </div>
            </fieldset>
            <div className="buttonContainer">
              <Button text="계속" />
              <Button text="취소" className="cancel" />
            </div>
          </div>
          <div className="payment">
            <h3 className="paymentTitle">결제</h3>
            <fieldset className="paymentContainer">
              <div className="radioContainer">
                <input
                  type="radio"
                  id="kakaopay"
                  name="payment"
                  className="radioInput"
                />
                <label for="kakaopay" className="label">
                  카카오페이
                </label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  className="radioInput"
                />
                <label for="card" className="label">
                  신용카드
                </label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="naverpay"
                  name="payment"
                  className="radioInput"
                />
                <label for="naverpay" className="label">
                  네이버페이
                </label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="payco"
                  name="payment"
                  className="radioInput"
                />
                <label for="payco" className="label">
                  페이코
                </label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="banking"
                  name="payment"
                  className="radioInput"
                />
                <label for="banking" className="label">
                  계좌이체
                </label>
              </div>
            </fieldset>
            <div className="buttonContainer">
              <Button text="주문하기" />
            </div>
          </div>
          <div className="complete">
            <h3 className="completeTitle">주문 완료</h3>
          </div>
        </div>

        <div className="cart">
          <div className="cartTitle title">
            <h3 className="cartTitleText">장바구니</h3>
            <Link to="/cart" className="editCartLink">
              <button className="editCartButton">편집</button>
            </Link>
          </div>
          <div className="cartDetail">
            <div className="cartDetailTitle table">
              <span className="cartDetailText productPrice">상품 금액</span>
              <span className="cartDetailText discountPrice">할인된 금액</span>
              <span className="cartDetailText totalPrice">총 결제 금액</span>
            </div>
            <div className="cartDetailPrice table">
              <span className="cartDetailText productPrice">472,600 원</span>
              <span className="cartDetailText discountPrice">- 2000 원</span>
              <span className="cartDetailText totalPrice">470,600 원</span>
            </div>
          </div>
          {/* TODO: 장바구니 컴포넌트가 들어갈 자리입니다. */}
        </div>
      </div>
    </div>
  );
};

export default Order;
