import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  'Footer': {
      gridRow: '3 / span 1',
      gridColumn: '1 / -1',
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& p': {
        margin: '0',
        padding: '0',
        color: '#0f3846',
        textAlign: 'center',
        fontSize: '1.6rem'
      }
  }
});

export default function Navbar(){
    const classes = useStyles();
    const {Footer} = classes;
    
    return(
        <footer className={Footer}>
            <p>Baro {new Date().getFullYear()}</p>
            
        </footer>
    )
}