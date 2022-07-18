import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const photo =
    "https://i.picsum.photos/id/953/4752/3168.jpg?hmac=Vo77y7btRA0RGcpgCazs_ziNcelS0fz2QOV559ygR2Y";
  return (
    <div className="home">
      <img src={photo} />
    </div>
  );
};

export default Home;
