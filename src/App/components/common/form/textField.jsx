import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClass = () => {
    return "form__input" + (error ? " form__input--invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>

      <div className="form__input-group">
        <input
          className={getInputClass()}
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {type === "password" && (
          <button
            className="eye-button"
            type="button"
            onClick={toggleShowPassword}
          >
            <img
              src={
                showPassword
                  ? "/img/icons/eye-off.svg"
                  : "/img/icons/eye-on.svg"
              }
              alt="eye"
            />
          </button>
        )}
      </div>
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

TextField.defaultProps = {
  type: "text"
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
