import React from "react";
import { Title } from "./Title";
import { makeStyles } from "@material-ui/styles";
import { MdAutorenew } from "react-icons/md";

const useStyles = makeStyles({
  ParentComponent: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  ParentItem: {
    marginTop: "3rem",
    width: "30rem",
    height: "30rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  ImgContainer: {
    width: "25rem",
    height: "25rem"
  },

  Img: {
    width: "25rem",
    height: "25rem",
    margin: 'auto'
  },

  Para: {
    height: '5rem',
    marginTop: "3rem",
    fontSize: "1.6rem"
  }
});

export default function ParentComponent({ src, name, title }) {
  const classes = useStyles();
  const { ParentComponent, ParentItem, ImgContainer, Img, Para } = classes;
  return (
    <div className={ParentComponent}>
      <div className={ParentItem}>
        <Title title={title} />
        <img className={Img} src={src} alt={name} />
        <p className={Para}>{name}</p>
      </div>
    </div>
  );
}
