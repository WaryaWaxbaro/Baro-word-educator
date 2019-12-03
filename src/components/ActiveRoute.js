import React from "react";
import Fruits from "./fruits/Fruits";
import WildAnimals from "./wildanimals/WildAnimals";
import FrontPageList from './FrontPageList';
import About from "./About";

export default function ActiveRoute(props) {
  const { name } = props.match.params;
  const renderComponent = name => {
    switch (name.toLowerCase()) {
      case "about":
        return <About />;
      case "wildanimals":
        return <WildAnimals />;
      case "fruits":
        return <Fruits />;
      default:
        return <FrontPageList />
    }
  };
  return <>{renderComponent(name)}</>;
}
