import React from 'react';
import Fruits from './Fruits';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(45deg, rgba(254,107,139, 0.5) 30%, rgba(255,142,83,0.5) 90%)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fruits />
    </div>
  );
}

export default App;
