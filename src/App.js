import React, { useState } from "react";
import ActiveRoute from "./components/ActiveRoute";
import { Route, Switch } from "react-router-dom";
import FrontPageList from "./components/FrontPageList";
import Container from "./components/Container";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    display: "grid",
    gridTemplateRows: "min-content min-content min-content",
    gridTemplateColumns: "1fr repeat(8, minmax(min-content, 14rem)) 1fr",
    backgroundColor: "#f7f7f7"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Container>
        <Switch>
          <Route
            exact
            path="/:name"
            render={rootProps => <ActiveRoute {...rootProps} />}
          />
          <Route exact path="/" render={() => <FrontPageList />} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
