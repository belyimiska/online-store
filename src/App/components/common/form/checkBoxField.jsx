import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className="form-check">
      <div className="form-check__row">
        <input
          type="checkbox"
          className="form-check_input"
          value=""
          id={name}
          onChange={handleChange}
          checked={value}
        />

        <label htmlFor={name} className="form-check__label">
          {children}
        </label>
      </div>

      {error && <div className="form-check__error">{error}</div>}
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CheckBoxField;
