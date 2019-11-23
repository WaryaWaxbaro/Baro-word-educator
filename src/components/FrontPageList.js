import React from "react";
import Fruits from "./fruits/Fruits";
import WildAnimals from "./wildanimals/WildAnimals";
import FrontPageListLink from "./FrontPageListLink";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  LinkContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'auto-fit',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    rowGap: '2rem',
    columnGap: '2rem',
    paddingRight: '2rem',
    boxSizing: 'content-box',
    overflowX: 'hidden',
    overflowY: 'auto'
  }
});

export default function FrontPageList(props) {

  const classes = useStyles();
  const {LinkContainer} = classes;
  const goToLink = id => {
    //props.history.push(`/${id}`);
  };

  return (
    <div className={LinkContainer}>
      <FrontPageListLink to="wildanimals" name="Wild Animals"/>
      <FrontPageListLink to="fruitsandvegetables" name="Fruits and Vegetable"/>
      <FrontPageListLink to="fruitsandvegetables" name="Fruits and Vegetable"/>
      <FrontPageListLink to="fruitsandvegetables" name="Fruits and Vegetable"/>
    </div>
  );
}
