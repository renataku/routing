import React from "react";

import "./Service.css";

const Service = ({ title, text }) => {
  return (
    <div className="service">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Service;
