import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import './Cart.scss';

const Cart = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // /data/data.json
    fetch('http://10.58.52.223:3000/carts', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(datas => {
        setDataList(datas.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <>Loading.... </>;

  // TODO : Delete 이벤트 통신 시 연결 시킬 함수
  const deleteCartList = (cart_id, product_id) => {
    fetch(`http://10.58.52.223:3000/carts/${cart_id}/products/${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleteItem) {
          alert('삭제 되었습니다.');
          setDataList(data.deleteItem);
        }
      });
  };
  // TODO : update (quantity)

  const increaseQuantity = cart_id => e => {
    const next = dataList.map(option => {
      if (option.cart_id === cart_id) {
        return { ...option, quantity: option.quantity + 1 };
      } else {
        return option;
      }
    });
    setDataList(next);
  };

  const decreaseQuantity = id => e => {
    const next = dataList.map(option => {
      if (option.id === id) {
        return { ...option, quantity: option.quantity - 1 };
      } else {
        return option;
      }
    });

    setDataList(next);
  };

  const totalPrice = dataList.reduce(
    (acc, { discounted_price_sum, quantity }) =>
      acc + discounted_price_sum * quantity,
    0
  );

  const originPrice = dataList.reduce(
    (acc, { price_sum, quantity }) => acc + price_sum * quantity,
    0
  );

  const discountPrice = dataList.reduce(
    (acc, { price_sum, discounted_price_sum, quantity }) =>
      acc + (price_sum - discounted_price_sum) * quantity,
    0
  );

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
            {dataList.map(cart => {
              return (
                <div className="imgCartCard" key={cart.id}>
                  <div className="imgContainer">
                    <img src={`${cart.images[0]}`} alt={`${cart.id}`} />
                  </div>
                  <CartCard
                    key={cart.id}
                    name={cart.name}
                    price={cart.price_sum}
                    {...cart}
                    cartId={cart.id}
                    actions={{
                      increaseQuantity,
                      decreaseQuantity,
                      deleteCartList,
                    }}
                  />
                </div>
              );
            })}
          </section>
        </div>
        <section className="orderList">
          <h3>주문 내역</h3>
          <dl className="originPrice">
            <dt>상품 금액</dt>
            <dd>{originPrice.toLocaleString()} 원</dd>
          </dl>
          <dl className="discountPrice">
            <dt>할인 금액</dt>
            <dd>-{discountPrice.toLocaleString()} 원</dd>
          </dl>
          <dl className="totalPrice">
            <dt>총 결제 금액</dt>
            <dd>{totalPrice.toLocaleString()} 원</dd>
          </dl>
          <Button text="결제하기" />
        </section>
      </main>
    </div>
  );
};

export default Cart;
