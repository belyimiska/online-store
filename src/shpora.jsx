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
      ? Object.keys(options).map((optionName) => ({
          title: options[optionName].title,
          id: options[optionName].id
        }))
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

        {optionsArray &&
          optionsArray.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.title}
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

// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import api from "../../api";
// import { useHistory } from "react-router-dom";
// import SelectField from "../common/form/selectField";
// import { validator } from "../../utils/validator";

// const ShoePage = ({ id }) => {
//   const history = useHistory();
//   const [shoeById, setShoeById] = useState();
//   const [data, setData] = useState({ size: "" });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     api.shoes.getById(id).then((data) => setShoeById(data));
//   }, []);

//   const handleBack = () => {
//     history.push("/shoes");
//   };

//   const handleChange = (target) => {
//     setData((prevState) => ({ ...prevState, [target.name]: target.value }));
//     setErrors({});
//   };

//   const validatorConfig = {
//     size: {
//       isRequired: {
//         message: "Выберите необходимый размер"
//       }
//     }
//   };

//   const validate = () => {
//     const errors = validator(data, validatorConfig);
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleAddToCart = () => {
//     const isValid = validate();
//     if (!isValid) return;
//     console.log(data);
//   };

//   return (
//     <>
//       {shoeById ? (
//         <section className="section-product">
//           <div className="container">
//             <button onClick={handleBack} className="back-btn">
//               Каталог
//             </button>
//             <div className="section-product__row">
//               <div className="section-product__img">
//                 <img src={shoeById.imgUrl} alt="shoe" />
//               </div>

//               <div className="section-product__info">
//                 <h1 className="section-product__title">
//                   <span className="section-product__subtitle">
//                     {shoeById.title}
//                   </span>
//                   <span className="section-product__brand">
//                     {shoeById.brand.title}
//                   </span>
//                 </h1>

//                 <div className="section-product__price">
//                   <div className="section-product__price-sum">
//                     {shoeById.price}
//                   </div>
//                   <div className="section-product__price-icon">
//                     <img src="/img/icons/ruble.svg" alt="ruble" />
//                   </div>
//                 </div>

//                 <div className="section-product__sizes">
//                   <SelectField
//                     label="Размеры:"
//                     value={data.size}
//                     name="size"
//                     defaultOption="Выберите размер"
//                     options={shoeById.size}
//                     onChange={handleChange}
//                     error={errors.size}
//                   />
//                 </div>

//                 <div className="section-product__btns">
//                   <button onClick={handleAddToCart} className="cart-btn">
//                     Добавить в корзину
//                   </button>
//                   <button onClick={handleAddToCart} className="favorite-btn">
//                     Добавить в избранное
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </>
//   );
// };

// ShoePage.propTypes = {
//   id: PropTypes.string
// };

// export default ShoePage;
