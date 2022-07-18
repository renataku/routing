import React from "react";
import { Link } from "react-router-dom";
import "./CompletedWork.css";

import WorkRow from "./WorkRow";

const CompletedWork = () => {
  const photo = [
    [
      "https://picsum.photos/id/882/300/200",
      "https://picsum.photos/id/884/300/200",
      "https://picsum.photos/id/885/300/200",
      "https://picsum.photos/id/887/300/200",
    ],
    [
      "https://picsum.photos/id/893/300/200",
      "https://picsum.photos/id/894/300/200",
      "https://picsum.photos/id/898/300/200",
      "https://picsum.photos/id/907/300/200",
    ],
  ];
  return (
    <div className="completed-work">
      <h2>Completed Work</h2>
      <div className="completed-work-photos">
        {photo.map((element) => (
          <WorkRow photo={element} />
        ))}
      </div>
    </div>
  );
};

export default CompletedWork;
