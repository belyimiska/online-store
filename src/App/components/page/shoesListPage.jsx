import React, { useEffect, useState } from "react";
import api from "../../api";

import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import FilterList from "../common/filterList";
import ShoesCard from "../ui/shoesCard";
import Sort from "../ui/sort";
import _ from "lodash";

const ShoesListPage = () => {
  const [shoes, setShoes] = useState();
  const [shoesTypes, setShoesTypes] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState();
  const [sortBy, setSortBy] = useState({ iter: "id", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  const pageSize = 8;

  useEffect(() => {
    api.shoes.fetchAll().then((data) => setShoes(data));
  }, []);

  useEffect(() => {
    api.types.fetchAll().then((data) => setShoesTypes(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, searchQuery]);

  const handleSort = (data) => {
    setSortBy(data);
  };

  const handleTypeSelect = (item) => {
    if (searchQuery !== "") {
      setSearchQuery("");
    }
    setSelectedType(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSearchQuery = ({ target }) => {
    setSelectedType(undefined);
    setSearchQuery(target.value);
  };

  const clearFilters = () => {
    setSelectedType();
    setCurrentPage(1);
  };

  if (shoes) {
    const filteredShoes = searchQuery
      ? shoes.filter(
          (shoe) =>
            shoe.searchReq.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
            -1
        )
      : selectedType
      ? shoes.filter(
          (shoe) => JSON.stringify(shoe.type) === JSON.stringify(selectedType)
        )
      : shoes;

    const count = filteredShoes.length;

    const sortedShoes = _.orderBy(filteredShoes, [sortBy.iter], [sortBy.order]);

    const shoesCrop = paginate(sortedShoes, currentPage, pageSize);

    return (
      <>
        {count > 0 && (
          <section className="section-order">
            <div className="container">
              <div className="section-order__row">
                <div className="search">
                  <input
                    className="search__input"
                    type="text"
                    name="searchQuery"
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={handleSearchQuery}
                  />
                </div>

                <Sort onSort={handleSort} />
              </div>
            </div>
          </section>
        )}

        <section className="section-filter">
          <div className="container">
            <div className="section-filter__row">
              {shoesTypes && (
                <FilterList
                  items={shoesTypes}
                  onItemSelect={handleTypeSelect}
                  selectedItem={selectedType}
                  onClear={clearFilters}
                />
              )}

              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </section>

        {count > 0 && (
          <section className="section-cards">
            <div className="container">
              <div className="section-cards__wrapper">
                {shoesCrop.map((shoe) => (
                  <ShoesCard key={shoe.id} {...shoe} />
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
  return <h2>Loading...</h2>;
};

export default ShoesListPage;
