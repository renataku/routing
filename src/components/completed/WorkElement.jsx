import React from "react";
import { Link } from "react-router-dom";
import "./WorkElement.css";

const WorkElement = ({ photo }) => {
  return (
    <div className="work-element">
      <img src={photo} />
    </div>
  );
};

export default WorkElement;
