import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Card: {
    width: "25rem",
    padding: '2rem',
    margin: '2rem',
    height: "16rem",
    border: "2px solid red",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Content: {
    height: "90%"
  },
  Name: {
    textAlign: "center",
    fontSize: "1.6rem"
  }
});

export default function FrontPageListItem({ name }) {
  const classes = useStyles();
  const { Card, Content, Name } = classes;
  return (
    <div className={Card}>
      <div className={Content}>Container place</div>
      <h1 className={Name}>{name}</h1>
    </div>
  );
}
