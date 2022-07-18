import React from "react";
import { Link } from "react-router-dom";
import "./New.css";
import Comments from "./Comments";

const New = ({ title, text, id }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
      <p>
        <Link to={`/news/comments/${id}`} key={id}>
          Comments
        </Link>
      </p>
    </div>
  );
};

export default New;
