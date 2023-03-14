import React, { useState } from "react";
import PropTypes from "prop-types";

const sortList = {
  default: { id: "jhgHBB401", iter: "id", title: "умолчанию" },
  raiting: { id: "jhgHBB402", iter: "rate", title: "популярности" },
  priceAsc: { id: "jhgHBB403", iter: "-price", title: "цене (дешевле)" },
  priceDesc: { id: "jhgHBB404", iter: "price", title: "цене (дороже)" }
};

const initialState = sortList.default.title;

const Sort = ({ onSort }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedType, setSelectedType] = useState(initialState);

  const handleSortListOpen = () => {
    setIsOpened(!isOpened);
  };

  const handleSort = (item, title) => {
    switch (item) {
      case "id":
        onSort({ iter: item, order: "asc" });
        break;
      case "rate":
        onSort({ iter: item, order: "desc" });
        break;
      case "price":
        onSort({ iter: item, order: "desc" });
        break;
      case "-price":
        onSort({ iter: item.slice(1), order: "asc" });
        break;
    }
    setSelectedType(title);
    setIsOpened(false);
  };

  return (
    <div className="sort">
      <div className="container">
        <div className="sort__wrapper">
          <span className="sort__label">Сортировка по:</span>
          <span onClick={handleSortListOpen} className="sort__type">
            {selectedType}
          </span>

          {isOpened && (
            <div className="sort__popup">
              <ul className="sort__popup-list">
                {Object.keys(sortList).map((sortItem) => (
                  <li
                    onClick={() =>
                      handleSort(
                        sortList[sortItem].iter,
                        sortList[sortItem].title
                      )
                    }
                    className={
                      "sort__popup-list-item" +
                      (sortList[sortItem].title === selectedType
                        ? " sort__popup-list-item--active"
                        : "")
                    }
                    key={sortList[sortItem].id}
                  >
                    {sortList[sortItem].title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Sort.propTypes = {
  onSort: PropTypes.func
};

export default Sort;
