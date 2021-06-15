import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders 'Portfolio Site' text", () => {
    render(<App />);
    const headingElement = screen.getByText(/Portfolio Site/i);
    expect(headingElement).toBeInTheDocument();
  });
});
