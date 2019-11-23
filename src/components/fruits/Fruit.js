import React from 'react';
import allFruits from '../../helpers/FruitGenerator';
import { makeStyles } from '@material-ui/styles';
import '../../styles/Fruit.css';

const useStyles = makeStyles({
  fruitContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 3rem',
    overflow: 'hidden'
  },

  header: {
      fontSize: '3.4rem',
      fontWeight: 'normal',
      textTransform: "uppercase",
      letterSpacing: '1px'
  },

  imgContainer: {
    height: '300px',
    width: '350px',
    border: '4px solid rgba(247, 247, 247, 0.5)',
    borderStyle: 'outset',
    borderRadius: '10px',
    boxShadow: '2px 5px 20px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    padding: '1rem',

    '&:hover': {
        boxShadow: '1px 3px 15px rgba(0, 0, 0, 0.3)'
    }
  },

  img: {
    height: '100%',
    width: '100%'
  }, 

  name: {
      fontSize: '3rem',
      marginTop: '3rem',
      textTransform: "uppercase",
      letterSpacing: '1px'
  }
});

export default function Fruit({random, iskeyPressed}){
    let name = allFruits()[random]["name"];
    let image = allFruits()[random].image;
    const classes = useStyles();
    return(
        <div className={classes.fruitContainer}>
            <h1 className={classes.header}>Fruits and vegetables</h1>
            <div className={classes.imgContainer}>
              {
                iskeyPressed ?
              <div class="lds-ripple"><div></div><div></div></div>
              : <img className={classes.img} src={image} alt="" />
              }
                
            </div>
            <p className={classes.name}>{!iskeyPressed && name}</p>
        </div>
    );
}