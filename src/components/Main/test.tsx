import "@testing-library/jest-dom/extend-expect"; // Import the matchers
import { render, screen } from "@testing-library/react";
import Teste from "./index";
import Main from "./index";

test("should render the heading", () => {
  render(<Main />);
  const heading = screen.getByRole("heading", { name: /Template Page/i });
  expect(heading).toBeInTheDocument();
});

test("should render the colors correctly", () => {
  const { container } = render(<Main />);
  expect(container.firstChild).toHaveStyle({
    "background-color": "#06092b",
  });
});
