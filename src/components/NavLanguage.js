import React, { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import LanguageOptions from "./LanguageOption";
import { makeStyles } from "@material-ui/styles";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useToggleState } from "../Hooks/useToggleState";

const useStyles = makeStyles({
  LanContainer: {
    position: "relative",
    height: "4rem",
    width: "12rem",
    backgroundColor: "#3288a5",
    margin: "0 2rem",
    padding: ".5rem",
    cursor: "pointer",
    fontSize: "2.2rem",
    color: "white",
    borderRadius: ".3rem",
    transition: "all .4s ease-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      textAlign: "center"
    },
    "& img": {
      width: "3rem",
      height: "3rem"
    }
  },
  Chevron: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function NavLanguage() {
  const classes = useStyles();
  const { LanContainer, Chevron } = classes;
  const [state, toggle] = useToggleState(false);
  const { currentOption } = useContext(LanguageContext);
  const { name, image, code } = currentOption;

  let disStyle = state
    ? { display: "block", height: "100%" }
    : { display: "none", height: "0" };
  return (
    <div className={LanContainer} onClick={toggle}>
      <p>{code.toUpperCase()}</p>
      <img src={image} alt={name} />
      <div className={Chevron}>
        {state ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      <LanguageOptions disStyle={disStyle} toggle={toggle}/>
    </div>
  );
}

export default NavLanguage;
