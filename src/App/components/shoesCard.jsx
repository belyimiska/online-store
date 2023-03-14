import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShoesCard = ({ title, price, imgUrl, brand, id }) => {
  return (
    <Link to={`/shoes/${id}`} className="card-link">
      <div className="card">
        <div className="card__img">
          <img src={imgUrl} alt="shoe" />
        </div>

        <div className="card__title">
          <p>
            {title} <b>{brand.title}</b>
          </p>
        </div>

        <div className="card__price">
          <div className="card__price-sum">{price}</div>
          <div className="card__price-icon">
            <img src="/img/icons/ruble.svg" alt="ruble" />
          </div>
        </div>
      </div>
    </Link>
  );
};

ShoesCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  brand: PropTypes.object
};

export default ShoesCard;
