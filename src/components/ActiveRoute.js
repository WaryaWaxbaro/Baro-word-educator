import React from "react";
import Fruits from "./fruits/Fruits";
import WildAnimals from "./wildanimals/WildAnimals";

export default function ActiveRoute(props) {
  const { name } = props.match.params;
  const renderComponent = name => {
    switch (name.toLowerCase()) {
      case "wildanimals":
        return <WildAnimals />;
      case "fruits":
        return <Fruits />;
    }
  };
  return <>{renderComponent(name)}</>;
}
