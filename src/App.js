import React, { useState } from 'react';
import ComponentDetails from './components/ComponentDetails';
import { Route, Switch } from 'react-router-dom';
import ComponentList from './components/ComponentList';
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
      <Switch>
        <Route exact path="/:name" render={(rootProps) => <ComponentDetails {...rootProps}/>} />
        <Route exact path="/" render={() => <ComponentList />} />
      </Switch>
    </div>
  );
}

export default App;
