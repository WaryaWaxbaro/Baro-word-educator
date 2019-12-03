import React, { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { pageName } from "../helpers/languages";
import FrontPageListLink from "./FrontPageListLink";
import { allFruits } from "../helpers/fruitGenerator";
import { wildAnimals } from "../helpers/wildanimalGenerator";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  LinkContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "content-box",
    paddingRight: "2.5rem",
    overflowX: "hidden",
    overflowY: "auto"
  },
  LinkContent: {
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "min-content",
    gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
    rowGap: "2rem",
    columnGap: "2rem"
  }
});

export default function FrontPageList(props) {
  const classes = useStyles();
  const { LinkContainer, LinkContent } = classes;
  const { lan } = useContext(LanguageContext);
  const { fruits, wildanimals } = pageName[lan];

  return (
    <div className={LinkContainer}>
      <div className={LinkContent}>
        <FrontPageListLink to="fruits" name={fruits} data={allFruits()['EN']} />
        <FrontPageListLink
          to="wildanimals"
          name={wildanimals}
          data={wildAnimals()['EN']}
        />
      </div>
    </div>
  );
}
