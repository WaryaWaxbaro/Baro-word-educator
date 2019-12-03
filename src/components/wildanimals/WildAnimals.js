import React, {useContext} from "react";
import { useKeyPressState } from "../../Hooks/useKeyPressState";
import { wildAnimals } from "../../helpers/wildanimalGenerator";
import ParentComponent from "../ParentComponent";
import ChildComponent from "../ChildComponent";
import { Loader } from "../Loader";
import { LanguageContext } from "../../contexts/languageContext";

export default function WildAnimals(props) {
  let {lan} = useContext(LanguageContext);
  let sel = wildAnimals()[lan];
  let length = sel.length;
  const [iskeyPressed, random] = useKeyPressState(length);
  const { name, image } = sel[random];
  return (
    <ParentComponent title="wild animals">
      {iskeyPressed ? <Loader /> : <ChildComponent name={name} image={image} />}
    </ParentComponent>
  );
}
