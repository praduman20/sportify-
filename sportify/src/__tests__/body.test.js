import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../pages/body";

test("should render body component", () => {
  render(<Body />);
  const bodyElement = screen.getByTestId("body-1");
  expect(bodyElement).toBeInTheDocument();
  expect(bodyElement).toHaveTextContent("Sportify");
});
