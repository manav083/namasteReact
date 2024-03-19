import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("should load a button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("should have a text submit inside contact us component", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
})

// It will fail. also provide the whole component which will get
// rendered on the page with error

// test("should fail this test case inside contact us component", () => {
//     render(<Contact />);

//     const text = screen.getByText("random");

//     expect(text).toBeInTheDocument();
// })

test("should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
})


test("should load 2 input boxes inside contact component", () => {
    render(<Contact />);


    // role for input boxes is "textbox".
    // getAll is for when we expect multiple things.
    // getBy is for when we expect only one thing.


    // this is called Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // it will not return the exact html
    // input tag instead it will return jsx element or 
    // react element or react fiber node or virtual dom
    // object.
    // console.log(inputBoxes.length);


    // Assertion
    expect(inputBoxes.length).toBe(2);
})