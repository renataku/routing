import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
  let params = useParams();
  console.log("params", params);
  const [items, setItems] = useState("");
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, [useState]);
  return (
    <div className="news">
      <h2>Comments</h2>
      {items &&
        items.map((item) => {
          return (
            <Comment
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
            />
          );
        })}
    </div>
  );
};

export default Comments;
