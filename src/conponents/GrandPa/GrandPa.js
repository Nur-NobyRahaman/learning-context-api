import React, { createContext, useState } from "react";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";
import Aunty from "./Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("ring");

const GrandPa = () => {
  const [house, setHouse] = useState(1);
  const ornament = "Diamond Ring";
  const handleHouse = () => {
    setHouse((oldHouse) => oldHouse + 1);
  };
  return (
    <RingContext.Provider value={ornament}>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <p>
          House : {house}
          <button onClick={handleHouse}>Buy A house</button>
        </p>

        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
