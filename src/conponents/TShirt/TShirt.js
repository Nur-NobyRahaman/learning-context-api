import React from "react";
import "./TShirts.css";
import { useTShirtsContext } from "../context/useTShirtsContext";

const TShirt = ({ tShirts }) => {
  const { addToCart, cart } = useTShirtsContext();
  const { name, price, picture } = tShirts;
  const handleAddToCart = (selectData) => {
    const exists = cart.find((cart) => cart?._id === selectData?._id);
    if (!exists) {
      addToCart(selectData);
    }
    else {
      alert("This item already exists")
    }
  };
  return (
    <div className="TShirt">
      <img src={picture} alt="" />
      <p>{name}</p>
      <p>Price : {price}</p>
      <button onClick={() => handleAddToCart(tShirts)}>Add to Cart</button>
    </div>
  );
};

export default TShirt;
