import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <main className="cartContainter">
        <div>
          <div className="noticeMembers">
            <h3>멤버에게 제공되는 무료 배송 서비스</h3>
            <p>
              나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
              누려보세요. 가입하기 또는 로그인
            </p>
          </div>
          <div className="noticeRefund">
            <p>반품 및 환불 지연 안내</p>
            <p>자세히 보기</p>
            <i className="fa-solid fa-xmark" />
          </div>
          <section>
            <h2>장바구니</h2>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cart;
