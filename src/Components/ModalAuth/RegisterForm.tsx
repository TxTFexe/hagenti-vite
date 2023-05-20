import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchRegister } from "../../redux/slices/authSlice";
import { useAppDispath } from "../../redux/store";

const RegisterForm = () => {
  const dispatch = useAppDispath();
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isValid },
  } = useForm<any>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    mode: "onChange",
  });

  const [cantRegister, setCantRegister] = React.useState(false);

  const onSubmit: SubmitHandler<any> = async (registerData: any) => {
    if (registerData.password === registerData.passwordRepeat) {
      setCantRegister(false);
      const data: any = await dispatch(fetchRegister(registerData));
      console.log(data);
      if (!data.payload) {
        setCantRegister(true);
      } else if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    }
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", {
          required: "Укажите имя",
        })}
        className="inputText"
        placeholder="Имя"
      ></input>
      <input
        {...register("surname", {
          required: "Укажите имя",
        })}
        className="inputText"
        placeholder="Фамилия"
      ></input>
      <input
        {...register("email", {
          required: "Укажите адрес электронной почты",
        })}
        className="inputText"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Укажите пароль",
        })}
        type="password"
        className="inputText"
        placeholder="Пароль"
      />
      <input
        {...register("passwordRepeat", {
          required: "Пароли не совпадают",
        })}
        type="password"
        className="inputText"
        placeholder="Повторите пароль"
      ></input>
      {cantRegister && (
        <div className="modal__error">
          Не удалось зарегистрироваться, проверьте правильно ли введены данные
        </div>
      )}
      <button className="green__button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
