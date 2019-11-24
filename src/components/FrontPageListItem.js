import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Card: {
    //width: "25rem",
    padding: '1rem',
    margin: '2rem',
    height: "20rem",
    borderRadius: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#191919',
    fontSize: '1.6rem',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      color: '#4c4c4c'
    }
  },
  Content: {
    height: "90%",
    width: '100%',
  },
  Name: {
    textAlign: "center",
    fontSize: "1.6rem",
    justifySelf: "flex-start",
    textTransform: 'uppercase',
    marginBottom: 0
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
