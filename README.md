# [4IZ] 스포츠 패션 브랜드 웹서비스

![4iz main thumbnail](https://user-images.githubusercontent.com/71865277/226162194-bf7488c8-9f9a-4ead-be54-6e8c8a0a0485.png)

> 본 프로젝트는 2023년 3월 위코드에서 진행한 1차 팀 프로젝트 결과물입니다.

<br /><br />

# 📅 개발 기간 및 인원
- 개발 기간: 2023.03.06 ~ 2023.03.17 (2주)
- 개발 인원: FrontEnd 2명, BackEnd 2명

<br /><br />

# ❶ **배경**

## 👟 왜 처음에 ‘나이키’를 참고하여 기획했나요?

<br /> 나이키는 엄청난 사용자수와 상품수를 보유하고 있어요. <br /> 

> 🏅 2023년 2월 나이키 국제 웹의 접속자 순위는 패션 브랜드 **4위**  <br />
> 👥 월별 접속자 수는 **1억 3천만 명**에 달해요.

<br />
엄청난 규모를 유지하고, 또 성장시키는 브랜드를 벤치마킹한다면 보다 완성도 높은 서비스를 기획할 수 있지 않을까요? <br />
잘 만들어진 예시를 바탕으로 우리만의 개성을 더하는 것이 목표였어요. <br /><br />
그렇게 시작된 프로젝트! 스포츠 의류를 판매하는 4iz 웹이예요.

---

<br />

# ❷ **서비스 소개**

## 🏃 4iz는 어떤 서비스인가요? 

- 4iz는 스포츠 의류를 판매하는 웹서비스예요. 
- 인터렉티브한 UX와 직관적인 UI 구성이 장점이예요.
- 10~20대 한국인 사용자에게 보다 최적화된 쇼핑몰 서비스예요.
- 서비스 미리보기: [피그마 링크](https://www.figma.com/file/0FwPO0VWitX1UWcWrHfxaO/Nike-Clone?node-id=0-1&t=OL4s7cBEv5cO2QWY-0)

<img src="https://user-images.githubusercontent.com/71865277/226177671-4ac87d13-5fe5-45bb-a08b-d2981196267c.gif" width=800 text-align="center" />

<br />
<br />

## 🏃 서비스의 기능이 궁금해요.

4iz의 주요 기능은 크게 네 가지예요.

1. ⚙ **로그인, 회원가입**
2. 🛍 **상품 리스트, 필터링**
3. 🛒 **상품 상세, 장바구니**
4. 💳 **주문, 결제**

<br />

### ⚙ 회원 (로그인/회원가입)

- 입력한 이메일을 확인해서 가입한 적 없다면 회원가입으로, 이미 있는 사용자라면 로그인으로 안내해요.
- 하나의 컴포넌트에서 조건에 따라 데이터를 바꿔가며 렌더링하는 방식으로 구현했어요.
- 중복검사, 로그인, 회원가입, 가입완료 페이지를 하나의 경로로 보여줘요.

회원가입

<img src="https://user-images.githubusercontent.com/71865277/226164117-a6168d61-9ea4-4042-b2cb-39661e5ad14d.gif" width=800 text-align="center" />

로그인

<img src="https://user-images.githubusercontent.com/71865277/226173449-47d8926b-f146-4968-b702-25ff26806864.gif" width=800 text-align="center" />

<br />

### 🛍 상품 리스트 (필터링)

- 상품 리스트를 할인율과 함께 확인할 수 있어요.
- 서브메뉴(카테고리)는 택1로, 성별/색상/사이즈 필터는 다중 선택 가능하도록 구현했어요.
- 정렬 드롭다운을 추가해서 최신순, 낮은 가격순, 높은 가격순으로 상품을 확인 가능해요.

<img src="https://user-images.githubusercontent.com/71865277/226173578-44198654-46d1-480f-9524-2dc770ab1724.gif" width=800 text-align="center" />

<br />

### 🛒 상품 상세, 장바구니

- 한 뷰포인트 내에서 이미지와 선택 옵션, 장바구니, 설명 등을 한눈에 확인할 수 있도록 구현했어요.
- 색상과 사이즈를 순서 상관 없이 각각 자유롭게 선택하여 장바구니에 담을 수 있어요.
- 장바구니에 담은 내용을 자유롭게 수정하거나 삭제할 수 있어요.

상품 상세페이지 <br />
<img src="https://user-images.githubusercontent.com/71865277/226176988-97533c90-a48e-4237-a76e-76e1e8732e8b.gif" width=800 text-align="center" />

장바구니 <br />
<img src="https://user-images.githubusercontent.com/71865277/226175037-f44c545e-36c5-4bde-9cf3-b149c5d6365a.gif" width=800 text-align="center" />

<br />

### 💳 주문, 결제

- 사용자가 배송지나 주문자의 정보를 입력해서 저장할 수 있어요.
- 결제 수단을 택1하여 선택한 후 버튼을 누르면 결제가 완료돼요.
- 결제가 완료되면 장바구니에 담은 내용이 비워져요.

<img src="https://user-images.githubusercontent.com/71865277/226176663-3178ca49-d4b7-4d70-99c8-df4e70325568.gif" width=800 text-align="center" />


---

<br />

# ❸ 핵심 기술

## 🧑‍💻 프론트엔드에서 활용된 기술이 궁금해요.

<br />

> 🔥 **쉽고 빠른 사용자 경험을 제공하는 Single Page Application** <br /> 

- 아래 기술을 사용해 React 프로젝트를 구현했어요.
- 기능 구현에 있어 가능한 라이브러리 사용을 지양하고 직접 만들어나가려 했어요.

    - React: JSX 문법과 Virtual DOM을 사용하는 JavaScript SPA 라이브러리
    - Scss: 높은 코드 재사용성과 가독성이 장점인 CSS 전처리기 언어
    - fetch 함수를 활용한 HTTP 비동기 통신

<br />

## + 앞으로의 계획 📝

<details>
<summary> 프론트엔드  </summary>  
<div markdown="1">

> 🙋 앞으로 프론트엔드에서는 이런 걸 구현해 볼 예정이에요.
    
    - 작성한 코드를 다시 돌아보며 다듬는 리팩토링 과정을 거칠 예정이에요.
    - JavaScript에서 TypeScript로 리팩토링을 진행하고 싶어요.

</div>
</details>

---

<br />

# ❺ 팀 소개

## 안녕하세요, 저희는 **4iz ✨**입니다!

> 팀에 내향형, I만 4명이라 4iz가 되었어요 🧚 <br />
> 상대적으로 인원은 적지만 누구보다 뛰어난 4iz 팀원들을 소개해드려요.

<br />

[이솜이](https://github.com/somyiLee)<br>(Frontend) | [장지아](https://github.com/jangjia01234) <br>(Product Manager, Frontend) | [류승준](https://github.com/seungjun-Ryu)<br>(Backend) | [이창섭](https://github.com/Chang9601) <br>(Project Manager, Backend) |  
| :---: | :---: | :---: | :---: |
| <a href="https://github.com/somyiLee"><img src="https://github.com/somyiLee.png" width="200"></a> | <a href="https://github.com/jangjia01234"><img src="https://github.com/jangjia01234.png" width="200"></a> | <a href="https://github.com/seungjun-Ryu"><img src="https://github.com/seungjun-Ryu.png" width="200"></a> | <a href="https://github.com/Chang9601"><img src="https://github.com/Chang9601.png" width="200"></a> |
