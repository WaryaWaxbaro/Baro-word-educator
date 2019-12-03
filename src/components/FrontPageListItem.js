import React from "react";
import {lessThanTen} from "../helpers/helperMethods";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Card: {
    //width: "25rem",
    backgroundColor: '#eaf8fd',
    padding: '1rem',
    margin: '2rem',
    height: "22rem",
    borderRadius: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#1a5e75',
    fontSize: '1.6rem',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      color: '#2484a4'
    }
  },
  Content: {
    height: "90%",
    width: '100%',
    padding: "1rem",
    display: 'grid',
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: ".5rem",
    "& img": {
      width: "90%",
      height: "90%",
      transition: "all .4s ease-out",

      "&:hover": {
        transform: "scale(1.2)"
      }
    }
  },
  Name: {
    textAlign: "center",
    fontSize: "1.6rem",
    justifySelf: "flex-start",
    textTransform: 'uppercase'
  }
});

export default function FrontPageListItem({ name, data }) {
  const classes = useStyles();
  const { Card, Content, Name } = classes;
  return (
    <div className={Card}>
      <div className={Content}>
        {
          lessThanTen(data).map((d, i) => (
            <img key={i} src={d.image} alt={d.name}/>
          ))
        }
      </div>
      <h1 className={Name}>{name}</h1>
    </div>
  );
}
