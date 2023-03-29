import React from "react";
import PropTypes from "prop-types";
// import FilterListItem from "./filterListItem";

const FilterList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  onClear
}) => {
  return (
    <div className="filter-block">
      <button className="filter-block__clear-btn" onClick={onClear}>
        все
      </button>

      <ul className="filter-block__list">
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

FilterList.defaultProps = {
  valueProperty: "id",
  contentProperty: "title"
};

FilterList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
  onClear: PropTypes.func
};

export default FilterList;
