import React, {useContext} from "react";
import {LanguageContext} from '../contexts/languageContext';
import { languages } from "../helpers/languages";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Selection: {
    position: "absolute",
    width: "100%",
    top: "5.5rem",
    left: "0",
    backgroundColor: "#48c3ed",
    textTransform: "uppercase",

    "& div": {
      backgroundColor: "#2b758e",
      padding: ".5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all .4s ease-out",

      "&:not(:last-child)": {
        marginBottom: ".5rem"
      },
      "&:hover": {
        backgroundColor: "#3288a5"
      }
    }
  }
});

function LanguageOption({disStyle, toggle}) {
  const classes = useStyles();
  const { Selection } = classes;
  const {setLan} = useContext(LanguageContext);
  
  const setLanAndToggle = e => {
    setLan(e);
    toggle();
  }
  return (
    <div className={Selection} style={disStyle}>
      {languages.map((lan, i) => (
        <div onClick={setLanAndToggle} key={i}>
          {lan.code}
          <img src={lan.image} alt={lan.name} />
        </div>
      ))}
    </div>
  );
}

export default LanguageOption;
