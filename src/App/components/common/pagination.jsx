import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination">
      <div className="pagination__row">
        <ul className="pagination__list">
          {pages.map((page) => (
            <li key={"page" + page} className="page__item">
              <button
                className={
                  "page__link " +
                  (page === currentPage ? "page__link--active" : "")
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
