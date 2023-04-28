import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, fetchAuth } from "../../redux/slices/authSlice";
import { useAppDispath } from "../../redux/store";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispath();
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [cantAuth, setCantAuth] = React.useState(false);

  const onSubmit: SubmitHandler<LoginData> = async (loginData: LoginData) => {
    const data: any = await dispatch(fetchAuth(loginData));
    console.log(data);
    if (!data.payload) {
      setCantAuth(true);
    } else if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
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
      {/* {errors?.email && (<div>{errors.email.message}</div>)} !!!Сообщение об ошибке!!! */}
      {cantAuth && (
        <div className="modal__error">
          Не удалось авторизоваться, неверный логин или пароль
        </div>
      )}
      <button className="green__button" type="submit">
        Продолжить
      </button>
    </form>
  );
};

export default LoginForm;
