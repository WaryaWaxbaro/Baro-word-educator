import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo from '../img/logo.svg';
import NavbarMenu from './NavbarMenu';
import NavLanguage from './NavLanguage';


const useStyles = makeStyles({
  Nav: {
    gridRow: "1 / span 1",
    gridColumn: "1 / -1",
    height: "8rem",
    backgroundColor: "#48c3ed",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function Navbar() {
  const classes = useStyles();
  const { Nav } = classes;

  return <nav className={Nav}>
    <NavbarMenu />
    <div>
      <img src={logo} alt="logo" />
    </div>
    <NavLanguage />
  </nav>;
}
