import React from "react";
import useKeyPressState from "../../Hooks/useKeyPressState";
import { wildAnimals } from "../../helpers/WildanimalGenerator";
import ParentComponent from "../ParentComponent";

export default function WildAnimals(props) {
  const [iskeyPressed, random] = useKeyPressState(wildAnimals().length);
  let name = wildAnimals()[random].name;
  let image = wildAnimals()[random].image;

  return (
    <>{!iskeyPressed && <ParentComponent title="wild animals" src={image} name={name} />}</>
  );
}
