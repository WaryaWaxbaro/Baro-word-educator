import React from "react";
import useKeyPressState from "../../Hooks/useKeyPressState";
import { wildAnimals } from "../../helpers/WildanimalGenerator";

export default function WildAnimals(props) {
  const [iskeyPressed, random] = useKeyPressState(wildAnimals().length);
  let name = wildAnimals()[random].name;
  let image = wildAnimals()[random].image;

  return (
    <div>
      <h1>Wild Animals</h1>
      {!iskeyPressed && (
        <>
          <img src={image} alt="" />
          <p>{name}</p>
        </>
      )}
    </div>
  );
}
