import React from "react";
import ModalLogin from "./ModalAuth/ModalLogin";

const EmptyCart: React.FC = () => {
  const [modalActive, setModalActive] = React.useState(false);
  return (
    <div className="container">
      <div className="cart empty-cart">
        <div className="cart-content">
          <h3>{"Ваша корзина пуста :("}</h3>
          <button
            className="autorization-button"
            onClick={() => setModalActive(!modalActive)}
          >
            Авторизоваться
          </button>
          {modalActive && <ModalLogin onClose={() => setModalActive(false)} />}
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
