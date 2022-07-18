import React from "react";
import "./Comment.css";

const Comment = ({ id, name, email, body }) => {
  return (
    <div>
      <p>{id}</p>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
