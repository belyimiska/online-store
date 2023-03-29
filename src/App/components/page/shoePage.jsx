import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import { useHistory } from "react-router-dom";
import SelectField from "../common/form/selectField";
import { validator } from "../../utils/validator";

const ShoePage = ({ id }) => {
  const history = useHistory();
  const [shoeById, setShoeById] = useState();
  const [sizes, setSizes] = useState([]);
  const [data, setData] = useState({ size: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    api.shoes.getById(id).then((data) => setShoeById(data));
  }, []);

  useEffect(() => {
    const data = shoeById ? shoeById.size : [];
    const sizesList = Object.keys(data).map((optionName) => ({
      label: data[optionName].title,
      value: data[optionName].id
    }));
    setSizes(sizesList);
  }, [shoeById]);

  const handleBack = () => {
    history.push("/shoes");
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setErrors({});
  };

  const validatorConfig = {
    size: {
      isRequired: {
        message: "Выберите необходимый размер"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getSizeById = (id) => {
    for (const size of sizes) {
      if (size.value === id) {
        return { id: size.value, title: size.label };
      }
    }
  };

  const handleAddToCart = () => {
    const isValid = validate();
    if (!isValid) return;

    const { size } = data;
    console.log({
      ...shoeById,
      size: getSizeById(size)
    });
  };

  return (
    <>
      {shoeById ? (
        <section className="section-product">
          <div className="container">
            <button onClick={handleBack} className="back-btn">
              Каталог
            </button>
            <div className="section-product__row">
              <div className="section-product__img">
                <img src={shoeById.imgUrl} alt="shoe" />
              </div>

              <div className="section-product__info">
                <h1 className="section-product__title">
                  <span className="section-product__subtitle">
                    {shoeById.title}
                  </span>
                  <span className="section-product__brand">
                    {shoeById.brand.title}
                  </span>
                </h1>

                <div className="section-product__price">
                  <div className="section-product__price-sum">
                    {shoeById.price}
                  </div>
                  <div className="section-product__price-icon">
                    <img src="/img/icons/ruble.svg" alt="ruble" />
                  </div>
                </div>

                <div className="section-product__sizes">
                  <SelectField
                    label="Размеры:"
                    value={data.size}
                    name="size"
                    defaultOption="Выберите размер"
                    options={sizes}
                    onChange={handleChange}
                    error={errors.size}
                  />
                </div>

                <div className="section-product__btns">
                  <button onClick={handleAddToCart} className="cart-btn">
                    Добавить в корзину
                  </button>
                  <button onClick={handleAddToCart} className="favorite-btn">
                    Добавить в избранное
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

ShoePage.propTypes = {
  id: PropTypes.string
};

export default ShoePage;
