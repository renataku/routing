import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import News from "./components/News";
// import Services from "./components/Services";
// import CompletedWork from "./components/CompletedWork";
// import Contacts from "./components/Contacts";
// import IIIComponent from "./components/IIIComponent";

const paths = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/news", name: "News" },
  { path: "/services", name: "Services" },
  { path: "/completed_work", name: "Completed Work" },
  { path: "/contacts", name: "Contacts" },
];

const logo = "https://flyclipart.com/thumb2/flappy-cat-logo-607884.png";

const date = new Date().getFullYear();

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <div className="logo">
          <img src={logo} />
        </div>

        <ul>
          {paths.map((path) => {
            return (
              <li>
                <Link to={path.path}>{path.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* <Outlet /> */}
      </header>
      <div className="content">{children}</div>
      <footer>All rights reserved &copy; {date}</footer>
    </div>
  );
};

export default Layout;
