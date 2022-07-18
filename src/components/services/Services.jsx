import React, { useState } from "react";
import Service from "./Service";

import "./Services.css";

const Services = () => {
  const [data] = useState([
    {
      title: "first title",
      text: "first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text first text",
    },
    {
      title: "second title",
      text: "second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text second text",
    },
    {
      title: "third title",
      text: "third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text third text",
    },
  ]);

  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-content">
        {data.map((element) => (
          <Service title={element.title} text={element.text} />
        ))}
      </div>
    </div>
  );
};

export default Services;
