import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Container: {
    gridRow: "2 / span 1",
    gridColumn: "2 / 10",
    height: "calc(100vh - 12rem)",
    overflow: 'hidden',
    overflowX: 'hidden'
  }
});

export default function Container(props) {
  const classes = useStyles();
  const { Container } = classes;

  return <div className={Container}>{props.children}</div>;
}
