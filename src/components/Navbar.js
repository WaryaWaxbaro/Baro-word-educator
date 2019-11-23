import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Nav: {
    gridRow: "1 / span 1",
    gridColumn: "1 / -1",
    height: "8rem",
    backgroundColor: "yellow"
  }
});

export default function Navbar() {
  const classes = useStyles();
  const { Nav } = classes;

  return <nav className={Nav}></nav>;
}
