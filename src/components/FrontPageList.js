import React from "react";
import Fruits from "./fruits/Fruits";
import WildAnimals from "./wildanimals/WildAnimals";
import FrontPageListLink from "./FrontPageListLink";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  LinkContainer: {
    height: "100%",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: "content-box",
    paddingRight: '2.5rem',
    overflowX: "hidden",
    overflowY: "auto"
  },
  LinkContent: {
    height: '100%',
    width: '100%',
    display: "grid",
    gridTemplateRows: "auto-fit",
    gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
    rowGap: "2rem",
    columnGap: "2rem"
  }
});

export default function FrontPageList(props) {
  const classes = useStyles();
  const { LinkContainer, LinkContent } = classes;
  const goToLink = id => {
    //props.history.push(`/${id}`);
  };

  return (
    <div className={LinkContainer}>
      <div className={LinkContent}>
        <FrontPageListLink to="wildanimals" name="Wild Animals" />
        <FrontPageListLink
          to="fruitsandvegetables"
          name="Fruits and Vegetable"
        />
        <FrontPageListLink
          to="fruitsandvegetables"
          name="Fruits and Vegetable"
        />
        <FrontPageListLink
          to="fruitsandvegetables"
          name="Fruits and Vegetable"
        />
      </div>
    </div>
  );
}
