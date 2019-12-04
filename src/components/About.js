import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { LanguageContext } from "../contexts/languageContext";
import { aboutText } from "../helpers/languages";

const useStyles = makeStyles({
  Paragraph: {
    fontSize: "1.6rem",
    letterSpacing: ".2rem",
    lineHeight: "1.6"
  },
  Heading: {
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    textTransform: "capitalize"
  },
  Counter: {
    fontWeight: "600"
  }
});

function About() {
  const classes = useStyles();
  const { Paragraph, Heading, Counter } = classes;
  const { lan } = useContext(LanguageContext);
  const { text, heading, instructions } = aboutText[lan];
  return (
    <div className={Paragraph}>
      <p>{text}</p>
      <h1 className={Heading}>{heading}</h1>
      {instructions.map((ins, i) => (
        <p key={i}>
          <span className={Counter}>{i + 1}. </span> 
          <span>{ins}</span>
        </p>
      ))}
    </div>
  );
}

export default About;
