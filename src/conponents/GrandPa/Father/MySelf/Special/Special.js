import React, { useContext } from "react";
import { RingContext } from "../../../GrandPa";

const Special = () => {
    const gift = useContext(RingContext)
  return (
    <div>
      <h5>Special</h5>
      <small>Gift: {gift}</small>
    </div>
  );
};

export default Special;
