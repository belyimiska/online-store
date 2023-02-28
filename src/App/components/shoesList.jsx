import React, { useState } from "react";
import api from "../api";

import Shoes from "./shoes";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const ShoesList = () => {
  const [shoes] = useState(api.shoes.fetchAll());
  const [currentPage, setCurrentPage] = useState(1);

  const count = shoes.length;
  const pageSize = 8;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const shoesCrop = paginate(shoes, currentPage, pageSize);

  return (
    <>
      <section className="section-cards">
        <div className="container">
          <div className="section-cards__wrapper">
            {count > 0 &&
              shoesCrop.map((shoe) => <Shoes key={shoe.id} {...shoe} />)}
          </div>
        </div>
      </section>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ShoesList;
