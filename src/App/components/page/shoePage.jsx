import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import { useHistory } from "react-router-dom";

const ShoePage = ({ id }) => {
  const history = useHistory();
  const [shoeById, setShoeById] = useState();

  useEffect(() => {
    api.shoes.getById(id).then((data) => setShoeById(data));
  }, []);

  const handleBack = () => {
    history.push("/shoes");
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

                <div className="section-product__btns">
                  <button className="cart-btn">Добавить в корзину</button>
                  <button className="favorite-btn">Добавить в избранное</button>
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
