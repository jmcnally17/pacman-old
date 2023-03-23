import { render, screen } from "@testing-library/react";
import Signup from "./signup";

describe("Signup", () => {
  it("contains the header", () => {
    render(<Signup />);
    expect(screen.getByRole("heading")).toHaveTextContent("Register");
  });

  it("contains the username and password input fields", () => {
    render(<Signup />);
    expect(
      screen.getByRole("textbox", { placeholder: "Username" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { placeholder: "Password" })
    ).toBeInTheDocument();
  });

  it("contains the button to register", () => {
    render(<Signup />);
    expect(screen.getByRole("button")).toHaveTextContent("Register");
  });
});
