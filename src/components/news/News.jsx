import React, { useState, useEffect } from "react";
import New from "./New";
import "./News.css";

const News = () => {
  const [items, setItems] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, [useState]);
  return (
    <div className="news">
      <h2>News</h2>
      {items &&
        items.map((item) => {
          return <New title={item.title} text={item.body} id={item.id} />;
        })}
    </div>
  );
};

export default News;
