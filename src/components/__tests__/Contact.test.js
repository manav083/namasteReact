import Contact from "../Contact";
import { render, screen } from "@testing-library/react";


test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})