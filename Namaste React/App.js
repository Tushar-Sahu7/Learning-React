import React from "react";
import ReactDOM from "react-dom/client";

// React createElement => ReactElement - js Object => HTML Element(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// jsx is not HTML in js, but its a HTML-like syntax
// jsx (transpiled before it reaches the browser) - PARCEL - Babel
// jsx => Babel transpiles it to React.createElement => React createElement => ReactElement - js Object => HTML Element(render)

//React Element
const jsxheading = (
  <h1 className="head" tabIndex="5">
    Namaste JSX🚀
  </h1>
);

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React🚀
    </h1>
  );
};

//React Component
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      {jsxheading}
      <h1 className="head" tabIndex="5">
        React Functional Component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
