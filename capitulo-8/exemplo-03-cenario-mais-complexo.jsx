import React, { useState } from "react";

const Bucket = ({ color }) => {
  console.log("Cor:", color);
};

const Lake = () => {
  const [water, setWater] = useState(0);
  const [color, setColor] = useState("Verde");

  return (
    <div>
      <button onClick={() => setWater(water + 1)}>Adicionar água</button>
      <button onClick={() => setColor("Cor alterada")}>
        Alterar cor do balde
      </button>
      <Bucket color={color} />
      <h2>Volume de água</h2>
      {water}
    </div>
  );
};

export default Lake;