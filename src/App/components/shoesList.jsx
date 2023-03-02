import React, { useEffect, useState } from "react";
import api from "../api";

import Shoes from "./shoes";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import FilterList from "./filterList";

const ShoesList = () => {
  const [shoes, setShoes] = useState([]);
  const [shoesTypes, setShoesTypes] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState();

  const pageSize = 8;

  useEffect(() => {
    api.shoes.fetchAll().then((data) => setShoes(data));
  }, []);

  useEffect(() => {
    api.types.fetchAll().then((data) => setShoesTypes(data));
  }, []);

  const handleTypeSelect = (item) => {
    setSelectedType(item);
    setCurrentPage(1);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const clearFilters = () => {
    setSelectedType();
    setCurrentPage(1);
  };

  const filteredShoes = selectedType
    ? shoes.filter(
        (shoe) => JSON.stringify(shoe.type) === JSON.stringify(selectedType)
      )
    : shoes;

  const count = filteredShoes.length;

  const shoesCrop = paginate(filteredShoes, currentPage, pageSize);

  return (
    <>
      <section className="section-products">
        <div className="container">
          <div className="section-products__row">
            {shoesTypes && (
              <FilterList
                items={shoesTypes}
                onItemSelect={handleTypeSelect}
                selectedItem={selectedType}
                onClear={clearFilters}
              />
            )}

            {count > 0 && (
              <section className="section-cards">
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
                <div className="section-cards__wrapper">
                  {shoesCrop.map((shoe) => (
                    <Shoes key={shoe.id} {...shoe} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoesList;
