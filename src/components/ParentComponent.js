import React from "react";
import { Title } from "./Title";
import { makeStyles } from "@material-ui/styles";
import { MdAutorenew } from "react-icons/md";

const useStyles = makeStyles({
  ParentComponent: {
    height: "100%",
    width: "100%",
    color: "#0f3846",
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
  }
});

export default function ParentComponent({ children, title }) {
  const classes = useStyles();
  const { ParentComponent, ParentItem } = classes;
  return (
    <div className={ParentComponent}>
      <div className={ParentItem}>
        <Title title={title} />
        {children}
      </div>
    </div>
  );
}
