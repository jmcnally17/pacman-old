import { render, screen } from "@testing-library/react";
import Main from "./main";

describe("Main", () => {
  it("contains", () => {
    render(<Main />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Welcome to Pac-Man!"
    );
  });
});
