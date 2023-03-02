import React from "react";
import PropTypes from "prop-types";
import FilterListItem from "./ui/filterListItem";

const FilterList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  onClear
}) => {
  return (
    <section className="filter-block">
      <div className="filter-block__wrapper">
        <h4 className="filter-block__title">фильтры</h4>

        <div className="filter-block__content">
          <FilterListItem
            items={items}
            onItemSelect={onItemSelect}
            selectedItem={selectedItem}
            valueProperty={valueProperty}
            contentProperty={contentProperty}
          />
        </div>

        <div className="filter-block__clear">
          <button className="filter-block__clear-btn" onClick={onClear}>
            сбросить фильтры
          </button>
        </div>
      </div>
    </section>
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
