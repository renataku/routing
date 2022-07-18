import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/news/News";
import Services from "./components/services/Services";
import CompletedWork from "./components/completed/CompletedWork";
import Contacts from "./components/Contacts";
import Layout from "./components/Layout";
import Comments from "./components/news/Comments";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/news", element: <News /> },
  { path: "/services", element: <Services /> },
  { path: "/completed_work", element: <CompletedWork /> },
  { path: "/contacts", element: <Contacts /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path="/news/comments/:postId"
          element={
            <Layout>
              <Comments />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/completed_work"
          element={
            <Layout>
              <CompletedWork />
            </Layout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
