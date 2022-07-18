import React from "react";
import "./About.css";

const About = () => {
  const photo2 = "https://picsum.photos/id/1068/300/200";
  return (
    <div className="about">
      <h2>About us</h2>
      <div className="about-photo">
        <img src={photo2} />
      </div>
      <div className="about-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
        aspernatur facilis ipsam doloremque. Libero ipsum tempora id totam
        blanditiis! At dolorum ab quos pariatur ex quasi. Vel similique ducimus
        ratione.
      </div>
    </div>
  );
};

export default About;
