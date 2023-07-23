import "@testing-library/jest-dom/extend-expect"; // Import the matchers
import { render, screen } from "@testing-library/react";
import Teste from "./index";

test("should render the heading", () => {
  render(<Teste />);
  const heading = screen.getByRole("heading", { name: /teste de página/i });
  expect(heading).toBeInTheDocument();
});
