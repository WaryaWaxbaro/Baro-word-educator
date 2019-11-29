import React from "react";
import { allFruits } from "../../helpers/fruitGenerator";
import { useKeyPressState } from "../../Hooks/useKeyPressState";
import ParentComponent from "../ParentComponent";
import { Loader } from "../Loader";
import ChildComponent from "../ChildComponent";

export default function Fruits() {
  const { so } = allFruits();
  let length = so.length;
  const [iskeyPressed, random] = useKeyPressState(length);
  const { name, image } = so[random];
  return (
    <ParentComponent title="fruits">
      {iskeyPressed ? <Loader /> : <ChildComponent name={name} image={image} />}
    </ParentComponent>
  );
}
