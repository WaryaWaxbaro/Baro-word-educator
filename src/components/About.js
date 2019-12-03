import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { LanguageContext } from "../contexts/languageContext";
import { aboutText } from "../helpers/languages";

const useStyles = makeStyles({
  Paragraph: {
    fontSize: "1.6rem",
    letterSpacing: ".2rem",
    lineHeight: "1.6"
  }
});

function About() {
  const classes = useStyles();
  const { Paragraph } = classes;
  const { lan } = useContext(LanguageContext);
  const {text} = aboutText[lan];
  return (
    <div className={Paragraph}>
      <p>{text}</p>
    </div>
  );
}

export default About;
