import React from "react";
import ReactDOM from "react-dom/client";
/* 
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

// nested elements
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
        ]),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h1",
            {},
            "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
        ]
    )]
)

// to remove this complexity (create element) we use jsx

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!"); // empty object is used to give attributes to the element like id, classname

// console.log(parent);

// it will return react element i.e. object
// it has props i.e. attributes + value of element(Hello World from React)


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

// job of render is to take this heading object
// and converts into a h1 tag that browser understands and put it in DOM