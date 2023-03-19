import React from "react";
import { useParams } from "react-router-dom";
import ShoePage from "../components/page/shoePage";
import ShoesListPage from "../components/page/shoesListPage";

const Shoes = () => {
  const params = useParams();
  const { shoeId } = params;

  return <>{shoeId ? <ShoePage id={shoeId} /> : <ShoesListPage />}</>;
};

export default Shoes;
