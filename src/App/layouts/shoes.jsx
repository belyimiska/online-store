import React from "react";
import { useParams } from "react-router-dom";
import ShoePage from "../components/shoePage";
import ShoesList from "../components/shoesList";

const Shoes = () => {
  const params = useParams();
  const { shoeId } = params;

  return <>{shoeId ? <ShoePage id={shoeId} /> : <ShoesList />}</>;
};

export default Shoes;
