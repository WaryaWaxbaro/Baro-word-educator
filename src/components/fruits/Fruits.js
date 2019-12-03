import React, {useContext} from "react";
import {LanguageContext} from '../../contexts/languageContext';
import { allFruits } from "../../helpers/fruitGenerator";
import { useKeyPressState } from "../../Hooks/useKeyPressState";
import ParentComponent from "../ParentComponent";
import { Loader } from "../Loader";
import ChildComponent from "../ChildComponent";

export default function Fruits() {
  let {lan} = useContext(LanguageContext);
  let sel = allFruits()[lan];
  let length = sel.length;
  const [iskeyPressed, random] = useKeyPressState(length);
  const { name, image } = sel[random];
  return (
    <ParentComponent title="fruits">
      {iskeyPressed ? <Loader /> : <ChildComponent name={name} image={image} />}
    </ParentComponent>
  );
}
