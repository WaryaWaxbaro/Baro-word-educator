import React from "react";
import FrontPageListLink from "./FrontPageListLink";
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
    gridTemplateRows: "20rem",
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
        <FrontPageListLink to="fruits" name="Fruits" />
        <FrontPageListLink to="wildanimals" name="Wild Animals" />
        <FrontPageListLink to="fruits" name="Fruits" />
        <FrontPageListLink to="wildanimals" name="Wild Animals" />
        <FrontPageListLink to="fruits" name="Fruits" />
        <FrontPageListLink to="wildanimals" name="Wild Animals" />
        <FrontPageListLink to="fruits" name="Fruits" />
      </div>
    </div>
  );
}
