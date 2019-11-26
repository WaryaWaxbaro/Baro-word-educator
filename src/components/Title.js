import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Heading: {
    textTransform: "uppercase",
    letterSpacing: ".2rem",
    fontSize: "2.5rem",
    margin: "3rem 0"
  }
});

//export default function Title({ title }) {}

export const Title = ({ title }) => {
  const classes = useStyles();
  const { Heading } = classes;
  return <h1 className={Heading}>{title}</h1>;
};
