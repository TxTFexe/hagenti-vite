import React from "react";
import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAppDispath } from "../../redux/store";
import { logout } from "../../redux/slices/authSlice";

const CartPopup: React.FC = () => {
  const dispath = useAppDispath();

  const logoutUser = () => {
    dispath(logout());
  };

  return (
    <>
      <div className={headerStyles.user__popup}>
        <Link to={"/my-account"}>Личный кабинет</Link>
        <hr />
        <Link to={"/my-account"}>Заказы</Link>
        <hr />
        <a onClick={logoutUser}>Выйти</a>
      </div>
    </>
  );
};

export default CartPopup;
