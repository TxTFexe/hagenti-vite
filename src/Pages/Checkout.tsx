import React from "react";
import { Link } from "react-router-dom";
import { RootState, useAppDispath } from "../redux/store";
import { useSelector } from "react-redux";

function Checkout() {
  const [adressInput, setAdressInput] = React.useState("");
  const [hideInput, setHideInput] = React.useState(true);
  const [payment, setPayment] = React.useState("");
  const [currentAdress, setCurrentAdress] = React.useState("");
  const [adress, setAdress] = React.useState([
    "г.Москва Ул. Пушкина Дом колотушкина 11 Квартира 25",
  ]);

  const onChangeAdressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdressInput(e.target.value);
  };

  const dispatch = useAppDispath();
  const { totalCheckedCount, totalCheckedPrice, checkedItems } = useSelector(
    (state: RootState) => state.cart
  );

  const addAdress = () => {
    setHideInput((prev) => !prev);
    if (adressInput !== "") {
      setAdress((prev) => [...prev, adressInput]);
    }
    setAdressInput("");
  };

  const createOrder = async () => {};

  return (
    <div className="container">
      <div className="checkout">
        <div className="checkout__header">
          <h1>Оформление заказа</h1>
        </div>
        <div className="checkout__grid">
          <div className="checkout__details">
            <div className="checkout__block">
              <h1 className="checkout__block__title">Выбор адреса доставки</h1>
              {adress.map((adr, i) => (
                <div
                  onClick={() => setCurrentAdress(adr)}
                  key={i}
                  className="checkout__block__selection"
                >
                  <span>{adr}</span>
                </div>
              ))}
              <input
                className={hideInput ? "hide" : ""}
                value={adressInput}
                onChange={(e) => onChangeAdressInput(e)}
                placeholder="Введите новый адрес"
              ></input>
              <button onClick={() => addAdress()}>
                Добавить {hideInput ? "+" : ""}
              </button>
            </div>
            <div className="checkout__block">
              <h1 className="checkout__block__title">Способ оплаты</h1>
              <div
                onClick={() => setPayment("Банковской картой")}
                className="checkout__block__selection"
              >
                <span>Банковской картой</span>
                <p>Visa, Mastercard, Мир</p>
              </div>
              <div
                onClick={() => setPayment("Наличными")}
                className="checkout__block__selection"
              >
                <span>Наличными</span>
                <p>Оплата наличными при получении</p>
              </div>
            </div>
            <div className="checkout__block">
              <h1 className="checkout__block__title">Состав заказа</h1>
              <div className="checkout__block__list">
                {checkedItems.map((item) => (
                  <Link to={"/GPU/" + item.id}>
                    <div className="checkout__block__product">
                      <img src={item.pic}></img>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="checkout__total__block">
            <div>
              <h1>К оплате</h1>
              <div className="order-details-item">
                <p>{totalCheckedCount}. Товар</p>
                <p>{totalCheckedPrice}₽</p>
              </div>
              <div className="order-details-item">
                <p>Скидка</p>
                <p>0₽</p>
              </div>
              <div className="order-details-item">
                <p>Доставка</p>
                <p>0₽</p>
              </div>
              <div className="order-details-item sum">
                <p>Сумма</p>
                <p>{totalCheckedPrice}₽</p>
              </div>
            </div>
            <a onClick={createOrder}>Оплатить</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
