import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct package
import Widget from "./Widget";
import "./index.css";
import ScriptLoader from "./ScriptLoader";

// Dynamically create a root element for the widget
const rootElement = document.createElement("div");
rootElement.id = "my-widget-root";
document.body.appendChild(rootElement);

// Use createRoot to render the component
const root = ReactDOM.createRoot(rootElement);
root.render(<Widget />);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(
  <React.StrictMode>
    <ScriptLoader />
  </React.StrictMode>
);
