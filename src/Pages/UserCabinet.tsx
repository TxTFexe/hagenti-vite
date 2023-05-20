import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const UserCabinet: React.FC = () => {
  const userData: any = useSelector((state: RootState) => state.auth.data);

  if (!userData) {
    return (
      <div className="container">
        <div className="develop">
          <h1>Ошибка, вы скорее всего не вошли в свой аккаунт</h1>
          <Link to={"/"}>Вернуться назад</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="account__header">
        <h2>Личный кабинет</h2>
      </div>
      <div className="user_cabinet_grid">
        <div className="user_cabinet__orders">
          <h1>Заказы</h1>
        </div>
        <div className="user_cabinet__info">
          <h1>Личные данные</h1>
          <span>Имя: {userData.fullName}</span>
          <span>Email: {userData.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCabinet;
