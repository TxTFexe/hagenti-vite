import React from "react";
import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";

const CartPopup: React.FC = () => {
  return (
    <>
      <div className={headerStyles.user__popup}>
        <Link to={"/my-account"}>Личный кабинет</Link>
        <hr />
        <Link to={"/my-account"}>Заказы</Link>
        <hr />
        <Link to={"/my-account"}>Выйти</Link>
      </div>
    </>
  );
};

export default CartPopup;
