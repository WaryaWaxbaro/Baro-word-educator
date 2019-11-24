import React from 'react';
import { Link } from "react-router-dom";
import FrontPageListItem from './FrontPageListItem';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Link: {
      textDecoration: 'none',
      color: 'red',
      fontSize: '1.6rem'
  }
});

export default function FrontPageListLink({to, name}){
    const classes = useStyles();
    const {Link} = classes;
    return(
        <Link classesName={Link} to={to}>
            <FrontPageListItem name={name}/>
      </Link>
    )
}