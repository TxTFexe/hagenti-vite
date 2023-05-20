import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ModalLoginProps = {
  onClose: () => void;
};

const ModalLogin: React.FC<ModalLoginProps> = ({ onClose }) => {
  const isAuth = useSelector((state: RootState) => state.auth.data);
  const [modal, setModal] = React.useState("login");

  if (isAuth) {
    onClose();
  }

  const outsideModalClick = (e: React.MouseEvent) => {
    if (e.target.className === "modal active") {
      onClose();
    }
  };

  return (
    <>
      <div className="modal active" onClick={(e) => outsideModalClick(e)}>
        <div className="modal-content">
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
          {modal === "register" && <RegisterForm />}
          {modal === "login" && <LoginForm />}
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
