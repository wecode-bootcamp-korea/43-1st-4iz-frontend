import React from 'react';
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
                <label for="name">이름</label>
                <input
                  type="text"
                  id="name"
                  placeholder="이름"
                  required
                  className="deliveryInput"
                />
              </div>
              <div className="deliveryInputContainer">
                <label for="name">도로명주소</label>
                <input
                  type="text"
                  id="address"
                  placeholder="도로명주소"
                  required
                  className="deliveryInput"
                />
              </div>
              <div className="deliveryInputContainer">
                <label for="name">상세주소</label>
                <input
                  type="text"
                  id="addressDetail"
                  placeholder="상세주소"
                  required
                  className="deliveryInput"
                />
              </div>
              <div className="deliveryContact">
                <div className="deliveryInputContainer phoneContainer">
                  <label for="name">휴대폰번호</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="휴대폰번호"
                    required
                    className="deliveryInput"
                  />
                </div>
                <div className="deliveryInputContainer emailContainer">
                  <label for="name">이메일</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="이메일"
                    required
                    className="deliveryInput"
                  />
                </div>
              </div>
            </fieldset>
            <div className="buttonBox">
              <Button text="계속" />
              <Button text="취소" className="cancel" />
            </div>
          </div>
          <div className="payment">
            <h3 className="paymentTitle">결제</h3>
            <fieldset className="paymentContainer">
              <div className="radioContainer">
                <input type="radio" id="kakaopay" />
                <label for="kakaopay">카카오페이</label>
              </div>
              <div className="radioContainer">
                <input type="radio" id="card" />
                <label for="card">신용카드</label>
              </div>
              <div className="radioContainer">
                <input type="radio" id="naverpay" />
                <label for="naverpay">네이버페이</label>
              </div>
              <div className="radioContainer">
                <input type="radio" id="payco" />
                <label for="payco">페이코</label>
              </div>
              <div className="radioContainer">
                <input type="radio" id="banking" />
                <label for="banking">계좌이체</label>
              </div>
            </fieldset>
            <div className="buttonBox">
              <Button text="주문하기" />
            </div>
          </div>
          <div className="complete">
            <h3 className="completeTitle">주문 완료</h3>
          </div>
        </div>

        <div className="cart">
          <h3 className="cartTitle title">장바구니</h3>
          <div>상품 금액</div>
          <div>배송비</div>
          <div>총 결제 금액</div>
          <h3>장바구니 컴포넌트 자리입니다입니다</h3>
          <h3>장바구니 컴포넌트 자리입니다입니다</h3>
          <h3>장바구니 컴포넌트 자리입니다입니다</h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
