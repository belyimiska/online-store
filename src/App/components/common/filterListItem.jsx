import React, { useState } from "react";
import PropTypes from "prop-types";

const FilterListItem = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFilterListOpen = () => {
    setIsVisible((prevState) => !prevState);
  };

  if (!Array.isArray(items)) {
    return (
      <div className="filter-block__category">
        <div
          className="filter-block__category-title"
          onClick={handleFilterListOpen}
        >
          <button>Вид товара</button>
        </div>
        <ul
          className={
            "filter-block__list" +
            (isVisible ? " filter-block__list--visible" : "")
          }
        >
          {Object.keys(items).map((item) => (
            <li
              key={items[item][valueProperty]}
              className={
                "filter-block__list-item" +
                (item === selectedItem
                  ? " filter-block__list-item--active"
                  : "")
              }
              onClick={() => onItemSelect(items[item])}
            >
              {items[item][contentProperty]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="filter-block__category">
      <div
        className="filter-block__category-title"
        onClick={handleFilterListOpen}
      >
        <button>Вид товара</button>
      </div>

      <ul
        className={
          "filter-block__list" +
          (isVisible ? " filter-block__list--visible" : "")
        }
      >
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              "filter-block__list-item" +
              (item === selectedItem ? " filter-block__list-item--active" : "")
            }
            onClick={() => onItemSelect(item)}
          >
            {item[contentProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterListItem.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};

export default FilterListItem;
