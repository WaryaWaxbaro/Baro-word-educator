import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  'Footer': {
      gridRow: '3 / span 1',
      gridColumn: '1 / -1',
      height: '4rem',
      backgroundColor: 'blue'
  }
});

export default function Navbar(){
    const classes = useStyles();
    const {Footer} = classes;
    
    return(
        <footer className={Footer}>
            
        </footer>
    )
}