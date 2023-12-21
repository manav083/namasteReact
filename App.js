import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => ReactElement - JS Object => HtmlElement using render function

const heading = React.createElement("h1", {id:"heading"}, "Namaste React using createElement");

// console.log(heading);

// JSX - HTML-like or XML-like syntax -Transpiled- Parcel - babel
// JSX - converted or transpiled to React.createElement by Babel => ReactElement-JS Object => HTMLElement using render function.

const jsxHeading = <h1 id="jsxheading">Namaste React using JSX</h1>;

// we are creating react element using jsx 
// whether we use react.createElement or use jsx both creates 
// same react objects

// console.log(jsxHeading);


// REACT COMPONENT



// render jsx heading

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);