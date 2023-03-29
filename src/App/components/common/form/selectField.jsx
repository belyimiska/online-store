import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
  error
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getSelectClass = () => {
    return (
      "select-field__form-select" +
      (error ? " select-field__form-select--invalid" : "")
    );
  };

  return (
    <div className="select-field">
      <label className="select-field__label" htmlFor={name}>
        {label}
      </label>

      <select
        className={getSelectClass()}
        id={name}
        value={value}
        name={name}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>

        {optionsArray.length > 0 &&
          optionsArray.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
      {error && <div className="select-field__error">{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SelectField;
