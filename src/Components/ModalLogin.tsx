import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";

type ModalLoginProps = {
  onClose: () => void;
};

type LoginData = {
  email: string;
  password: string;
};

const ModalLogin: React.FC<ModalLoginProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const [modal, setModal] = React.useState("login");

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(`Your email ${data.email}`);
    console.log(`Your password ${data.password}`);
  };

  return (
    <>
      <div className="modal active">
        <div className="modal-content" onClick={onClose}>
          <div className="p-relative">
            <div className="modal__title">
              <h2
                onClick={() => setModal("login")}
                className={
                  modal === "login" ? "modal__mode__active" : "modal__mode"
                }
              >
                Вход
              </h2>
              <h2>/</h2>
              <h2
                onClick={() => setModal("register")}
                className={
                  modal === "register" ? "modal__mode__active" : "modal__mode"
                }
              >
                Регистрация
              </h2>
            </div>
            <HiOutlineXMark
              className="modal__close__button"
              onClick={onClose}
            />
          </div>
          {modal === "register" && (
            <>
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
            </>
          )}
          {modal === "login" && (
            <>
              <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="inputText"
                  placeholder="Email"
                />
                <input
                  {...register("password")}
                  type="password"
                  className="inputText"
                  placeholder="Пароль"
                />
                {/* {errors?.email && (<div>{errors.email.message}</div>)} !!!Сообщение об ошибке!!! */}
                <button className="green__button" type="submit">
                  Продолжить
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
