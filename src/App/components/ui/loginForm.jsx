import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Электронная почта введена некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы один заглавный символ"
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру"
      },
      minCount: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="section-login__wrapper">
          <h1 className="section-login__title">Login</h1>
          <form className="section-login__form" onSubmit={handleSubmit}>
            <TextField
              label="Электронная почта"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />

            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />

            <button
              className="section-login__button"
              type="submit"
              disabled={!isValid}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
