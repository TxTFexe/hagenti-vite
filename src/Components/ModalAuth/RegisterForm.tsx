import React from "react";

const RegisterForm = () => {
  return (
    <form className="modal__form">
      <input placeholder="Имя"></input>
      <input placeholder="Фамилия"></input>
      <input placeholder="Email"></input>
      <input type="password" placeholder="Пароль"></input>
      <input type="password" placeholder="Повторите пароль"></input>
      <button className="green__button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
