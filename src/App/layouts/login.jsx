import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <section className="section-auth">
      <div className="container">
        <div className="section-auth__wrapper">
          {formType === "register" ? (
            <>
              <div className="section-auth__header">
                <h1 className="section-auth__title">Регистрация</h1>
              </div>

              <RegisterForm />

              <div className="section-auth__account">
                <p>
                  Уже зарегистрированы? <a onClick={toggleFormType}>Войти</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="section-auth__header">
                <h1 className="section-auth__title">Войти</h1>
              </div>

              <LoginForm />

              <div className="section-auth__account">
                <p>
                  Нет аккаунта? <a onClick={toggleFormType}>Регистрация</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
