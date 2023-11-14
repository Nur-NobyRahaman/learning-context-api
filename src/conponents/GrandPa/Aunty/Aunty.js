import React, { useContext } from "react";
import { RingContext } from "../GrandPa";

const Aunty = ({ house }) => {
  const gift = useContext(RingContext);
  return (
    <div>
      <h3>aunty</h3>
      <p>House : {house}</p>
      <p>Gift:{gift}</p>
    </div>
  );
};

export default Aunty;
