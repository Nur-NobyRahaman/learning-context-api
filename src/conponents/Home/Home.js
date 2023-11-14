import React from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import TShirt from "../TShirt/TShirt";
import { useTShirtsContext } from "../context/useTShirtsContext";



const Home = () => {
  const { tShirts } = useTShirtsContext();
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((data) => (
          <TShirt key={data?._id} tShirts={data}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
