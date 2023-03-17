import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Cart.scss';

const Cart = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    // /data/data.json
    fetch('http://10.58.52.236:3000/carts', {
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
  const deleteCartList = (cart_id, product_id) => e => {
    const token = localStorage.getItem('token');

    fetch(`http://10.58.52.236:3000/carts/${cart_id}/products/${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    }).then(({ ok }) => {
      if (!ok) return;

      const next = dataList.filter(({ cart_id: cartId }) => cart_id === cartId);
      setDataList(next);
      alert('삭제되었습니다');
    });
  };

  // TODO : update (quantity)함수

  const increaseQuantity = (cart_id, product_id, quantity) => e => {
    const next = dataList.map(option => {
      if (option.cart_id === cart_id) {
        return { ...option, quantity: option.quantity + 1 };
      } else {
        return option;
      }
    });
    setDataList(next);

    changeQuantity(cart_id, product_id, quantity);
  };

  const decreaseQuantity = (cart_id, product_id, quantity) => e => {
    if (quantity === 1) return;

    const next = dataList.map(option => {
      if (option.cart_id === cart_id) {
        return { ...option, quantity: option.quantity - 1 };
      } else {
        return option;
      }
    });

    setDataList(next);

    changeQuantity(cart_id, product_id, quantity);
  };

  const changeQuantity = (cart_id, product_id, quantity) => {
    const token = localStorage.getItem('token');

    fetch(`http://10.58.52.236:3000/carts/${cart_id}/products/${product_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        cart_id,
        quantity,
        product_id,
      }),
    }).then(response => response.json());
  };

  const originPrice = dataList.reduce(
    (acc, { price_sum }) => acc + Number(price_sum),
    0
  );

  const discountPrice = dataList.reduce(
    (acc, { price_sum, discounted_price_sum }) =>
      acc + Number(price_sum - discounted_price_sum),
    0
  );

  const totalPrice = dataList.reduce(
    (acc, { quantity, price }) => acc + Number(quantity * price),
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
                <div className="imgCartCard" key={cart.cart_id}>
                  <div className="imgContainer">
                    <img src={`${cart.images[0]}`} alt={`${cart.id}`} />
                  </div>
                  <div className="cartCard">
                    <div className="cartInfo">
                      <h4>{cart.name}</h4>
                      <p className="selectedOption">
                        {cart.size} / {cart.color}
                      </p>
                    </div>
                    <div className="addCart">
                      <div className="count">
                        <button
                          type="button"
                          onClick={decreaseQuantity(
                            cart.cart_id,
                            cart.product_id,
                            cart.quantity
                          )}
                        >
                          -
                        </button>
                        <div className="countInputText">{cart.quantity}</div>
                        <button
                          type="button"
                          onClick={increaseQuantity(
                            cart.cart_id,
                            cart.product_id,
                            cart.quantity
                          )}
                        >
                          +
                        </button>
                      </div>
                      <p className="selectedPrice">
                        {Number(cart.quantity * cart.price).toLocaleString()}원
                      </p>
                      <i
                        className="fa-solid fa-xmark"
                        onClick={deleteCartList(cart.cart_id, cart.product_id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
        <section className="orderList">
          <h3>주문 내역</h3>
          <dl className="originPrice">
            <dt>상품 금액</dt>
            <dd>{totalPrice.toLocaleString()} 원</dd>
          </dl>
          <dl className="discountPrice">
            <dt>할인 금액</dt>
            <dd>-{discountPrice.toLocaleString()} 원</dd>
          </dl>
          <dl className="totalPrice">
            <dt>총 결제 금액</dt>
            <dd>{totalPrice.toLocaleString()} 원</dd>
          </dl>
          <div
            onClick={() => {
              dataList.length === 0
                ? alert('장바구니가 비어있습니다.')
                : navigate('/order');
            }}
          >
            <Button text="결제하기" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
