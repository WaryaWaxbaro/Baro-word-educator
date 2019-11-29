import React from "react";
import { useKeyPressState } from "../../Hooks/useKeyPressState";
import { wildAnimals } from "../../helpers/wildanimalGenerator";
import ParentComponent from "../ParentComponent";
import ChildComponent from "../ChildComponent";
import { Loader } from "../Loader";

export default function WildAnimals(props) {
  let num = wildAnimals().length;
  const [iskeyPressed, random] = useKeyPressState(num);
  const { name, image } = wildAnimals()[random];

  return (
    <ParentComponent title="wild animals">
      {iskeyPressed ? <Loader /> : <ChildComponent name={name} image={image} />}
    </ParentComponent>
  );
}
