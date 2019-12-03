import React from "react";
import { useKeyPressState } from "../../Hooks/useKeyPressState";
import { wildAnimals } from "../../helpers/wildanimalGenerator";
import ParentComponent from "../ParentComponent";
import ChildComponent from "../ChildComponent";
import { Loader } from "../Loader";

export default function WildAnimals(props) {
  const { so } = wildAnimals();
  let length = so.length;
  const [iskeyPressed, random] = useKeyPressState(length);
  const { name, image } = so[random];
  return (
    <ParentComponent title="wild animals">
      {iskeyPressed ? <Loader /> : <ChildComponent name={name} image={image} />}
    </ParentComponent>
  );
}
