import React from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <main className="cartContainter">
        <div className="cartListContainer">
          <div className="noticeMembers">
            <h3>멤버에게 제공되는 무료 배송 서비스</h3>
            <p>
              나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
              누려보세요. 가입하기 또는 로그인
            </p>
          </div>
          <div className="noticeRefund">
            <div>
              <h4>반품 및 환불 지연 안내</h4>
              <p>자세히 보기</p>
            </div>
            <i className="fa-solid fa-xmark" />
          </div>
          <section className="cartContainer">
            <h3>장바구니</h3>
            {/* TODO: CartCard 컴포넌트가 들어갈 자리입니다 */}
          </section>
        </div>
        <section className="orderList">
          <h3>주문 내역</h3>
          <dl className="originPrice">
            <dt>상품 금액</dt>
            <dd>472,600 원</dd>
          </dl>
          <dl className="discountPrice">
            <dt>할인 금액</dt>
            <dd>- 2000 원</dd>
          </dl>
          <dl className="totalPrice">
            <dt>총 결제 금액</dt>
            <dd>470,600 원</dd>
          </dl>
          <Button text="결제하기" />
          {/* TODO: CartCard 컴포넌트가 들어갈 자리입니다 */}
        </section>
      </main>
    </div>
  );
};

export default Cart;
