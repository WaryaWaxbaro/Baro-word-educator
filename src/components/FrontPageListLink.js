import React from 'react';
import { Link } from "react-router-dom";
import FrontPageListItem from './FrontPageListItem';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  LinkStyle: {
      textDecoration: 'none',
      color: 'red',
      fontSize: '1.6rem'
  }
});

export default function FrontPageListLink({to, name}){
    const classes = useStyles();
    const {LinkStyle} = classes;
    return(
        <Link classesName={LinkStyle} to={to}>
            <FrontPageListItem name={name}/>
      </Link>
    )
}