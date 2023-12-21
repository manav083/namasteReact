import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => ReactElement - JS Object => HtmlElement using render function

// const heading = React.createElement("h1", {id:"heading"}, "Namaste React using createElement");

// console.log(heading);

// JSX - HTML-like or XML-like syntax -Transpiled- Parcel - babel
// JSX - converted or transpiled to React.createElement by Babel => ReactElement-JS Object => HTMLElement using render function.

// const jsxHeading = <h1 id="jsxheading">Namaste React using JSX</h1>;

// we are creating react element using jsx 
// whether we use react.createElement or use jsx both creates 
// same react objects

// console.log(jsxHeading);


// REACT COMPONENT
// - Class Based Components - Old
// - Functional Components - New


const fn = () => true;

// equivalent to (In arrow function)

const fn2 = () => {
    return true
}

// React Functional Component
// const HeadingComponent = () => {
//     return <div id="container"><h1>Namaste React Functional Component</h1></div>
// }

// equivalent to (In arrow function)

// const HeadingComponent2 = () => (
//     <h1>Namaste React Functional Component</h1>
// )


// nesting one component into other
const Title = () => {
    return <h1 className="head">Namaste React using title component</h1>
}

const elem = <span>React Element</span>

const title = (
    <h1>
        {elem}
        Namaste React Element
    </h1>
)


const number = 10000;

const HeadingComponent = () => {
    return <div id="container">
        {Title()}
        {/* We can also called a functional component like 
        this because at the end it is a normal javascript function */}
        <Title />
        <Title></Title> 
        {/* All of the above 3 statement are same it is just a syntax */}
        {title}
        {/* React Element is at the end is javascript variable so render it using {} */}
        <h2>{number + 2000}</h2>
        {/* Javascript code inside jsx using {} */}
        <h1>Namaste React Functional Component</h1>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering a react element
// root.render(jsxHeading);

// rendering a React Component
root.render(<HeadingComponent />)