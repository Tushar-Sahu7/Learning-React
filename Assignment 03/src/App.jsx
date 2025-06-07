import React from "react";
import "./App.css";
import Header from "./components/Header";

//React Element
const title = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, " Hi,  I am a React Element"),
  React.createElement(
    "h2",
    {},
    " My purpose is to make the developer's life easy"
  ),
  React.createElement(
    "h3",
    {},
    " You can see the Navbar on the above is made with React components"
  ),
]);

//JSX Functional Component
const Jsxheading = () => (
  <div className="heading">
    <h1> Hi, I am also React element but written in jsx 😎</h1>
    <h2> My purpose is to make the developer's life way more easier!</h2>
    <h3>You can see the Navbar on the above is made with React components</h3>
  </div>
);

export function App() {
  return (
    <>
      <Header />
      <div className="hero-section">
        {title}
        <Jsxheading />
      </div>
      {/* {jsxheading()} */}
    </>
  );
}
