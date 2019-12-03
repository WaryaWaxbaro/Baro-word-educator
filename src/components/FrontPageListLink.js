import React from "react";
import { Link } from "react-router-dom";
import FrontPageListItem from "./FrontPageListItem";

export default function FrontPageListLink({ to, name, data }) {
  return (
    <Link
      style={{
        textDecoration: "none"
      }}
      to={to}
    >
      <FrontPageListItem name={name} data={data}/>
    </Link>
  );
}
