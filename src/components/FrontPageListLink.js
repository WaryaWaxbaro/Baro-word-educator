import React from 'react';
import { Link } from "react-router-dom";
import FrontPageListItem from './FrontPageListItem';

export default function FrontPageListLink({to, name}){
    return(
        <Link style={{textDecoration: 'none'}} to={to}>
            <FrontPageListItem name={name}/>
      </Link>
    )
}