import React from "react";
import Sidenav from "./Sidenav";
import { useToggleState } from "../Hooks/useToggleState";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Menu: {
    height: "4rem",
    width: "4rem",
    marginLeft: "2rem",
    marginRight: "auto",
    fontSize: "3.5rem",
    color: "#777",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "& span": {
      cursor: "pointer",

      "&:hover": {
        color: "#f7f7f7"
      }
    }
  }
});

export default function NavbarMenu() {
  const [show, toggle] = useToggleState(false);

  const classes = useStyles();
  const { Menu } = classes;
  return (
    <div className={Menu}>
      <span onClick={toggle}>{show ? <MdChevronLeft /> : <MdChevronRight />}</span>
      <Sidenav show={show} toggle={toggle}/>
    </div>
  );
}
