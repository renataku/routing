import React from "react";
import { Link } from "react-router-dom";
import "./WorkRow.css";
import WorkElement from "./WorkElement";

const WorkRow = ({ photo }) => {
  return (
    <div className="work-row">
      {photo.map((element) => (
        <WorkElement photo={element} />
      ))}
    </div>
  );
};

export default WorkRow;
