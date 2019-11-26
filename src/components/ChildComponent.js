import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  ImgContainer: {
    width: "25rem",
    height: "25rem"
  },

  Img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "1rem"
  },

  Para: {
    height: "10rem",
    marginTop: "3rem",
    fontSize: "2.5rem",
    fontWeight: "500"
  }
});

export default function ChildComponent({ image, name }) {
  const classes = useStyles();
  const { ImgContainer, Img, Para } = classes;
  return (
    <>
      <div className={ImgContainer}>
        <img className={Img} src={image} alt={name} />
      </div>
      <div className={Para}>
        <p>{name}</p>
      </div>
    </>
  );
}
