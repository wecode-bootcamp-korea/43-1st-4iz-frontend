import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { emailRegExp, telRegExp } from '../../Util/regex';
import Button from '../../components/Button/Button';
import './Order.scss';

const USER_INFO = {
  name: '',
  address: '',
  detailAddress: '',
  tel: '',
  email: '',
};

const Order = () => {
  const [userInfo, setUserInfo] = useState(USER_INFO);
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { name, tel, address, detailAddress, email } = userInfo;

  const isEmailActive = emailRegExp.test(email) || !email;
  const isNameActive = name.length > 1 || !name;
  const isTelActive = telRegExp.test(tel) || !tel;
  const isAddressActive = address.length > 5 || !address;
  const isdDtailAddressActive = detailAddress.length > 5 || !detailAddress;
  let token = localStorage.getItem('token');

  useEffect(() => {
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

  const onChangeUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const checkUserInfo = e => {
    // e.preventDefault();
    fetch('http://10.58.52.223:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        name: userInfo.name,
        street: userInfo.address,
        address: userInfo.detailAddress,
        phoneNumber: userInfo.tel,
        email: userInfo.email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (isNameActive && isTelActive && name && tel && telRegExp.test(tel)) {
          alert('저장되었습니다!');
        } else {
          alert('옵션을 모두 입력해주세요.');
        }
      });
  };

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
                  name="name"
                  onChange={onChangeUserInfo}
                  className={`deliveryInput ${
                    isNameActive ? 'noAlert' : 'alert'
                  }`}
                  required
                />
              </div>
              <div className="deliveryInputContainer">
                <label>도로명주소*</label>
                <input
                  type="text"
                  placeholder="도로명주소"
                  name="address"
                  onChange={onChangeUserInfo}
                  className={`deliveryInput ${
                    isAddressActive ? 'noAlert' : 'alert'
                  }`}
                  required
                />
              </div>
              <div className="deliveryInputContainer">
                <label>상세주소*</label>
                <input
                  type="text"
                  placeholder="상세주소"
                  name="detailAddress"
                  onChange={onChangeUserInfo}
                  className={`deliveryInput ${
                    isdDtailAddressActive ? 'noAlert' : 'alert'
                  }`}
                  required
                />
              </div>
              <div className="deliveryContact">
                <div className="deliveryInputContainer phoneContainer">
                  <label>휴대폰번호*</label>
                  <input
                    type="tel"
                    placeholder="휴대폰번호"
                    name="tel"
                    onChange={onChangeUserInfo}
                    className={`deliveryInput ${
                      isTelActive ? 'noAlert' : 'alert'
                    }`}
                    required
                  />
                </div>
                <div className="deliveryInputContainer emailContainer">
                  <label>이메일*</label>
                  <input
                    type="email"
                    placeholder="이메일"
                    name="email"
                    onChange={onChangeUserInfo}
                    className={`deliveryInput ${
                      isEmailActive ? 'noAlert' : 'alert'
                    }`}
                    required
                  />
                </div>
              </div>
            </fieldset>
            <div className="buttonContainer" onClick={checkUserInfo}>
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
                <label htmlFor="kakaopay" className="label">
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
                <label htmlFor="card" className="label">
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
                <label htmlFor="naverpay" className="label">
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
                <label htmlFor="payco" className="label">
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
                <label htmlFor="banking" className="label">
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

          <section className="orderList">
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
            {/* TODO: CartCard 컴포넌트가 들어갈 자리입니다 */}
            {dataList.map(product => {
              const discountedPrice =
                Number(product.price_sum) -
                Number(product.discounted_price_sum);
              return (
                <div class="addedProduct" key={product.id}>
                  <div class="productContainer">
                    <img src={`${product.images[0]}`} alt={`${product.name}`} />
                  </div>
                  <dl className="productInfo">
                    <dt>{product.name}</dt>
                    <dd>
                      선택 옵션: {product.color}/{product.size}
                    </dd>
                    <dd>수량 : {product.quantity}</dd>
                    <dd>{discountedPrice.toLocaleString()}원</dd>
                  </dl>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order;
