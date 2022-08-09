import { render, screen } from "@testing-library/react";
import Main from "./main";

describe("Main", () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.load = () => undefined;
    window.HTMLMediaElement.prototype.play = () => undefined;
    window.HTMLMediaElement.prototype.pause = () => undefined;
  });

  it("contains the header", () => {
    render(<Main />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Welcome to Pac-Man!"
    );
  });

  it("contains the gif", () => {
    render(<Main />);
    const gifEl = screen.getByRole("img");
    expect(gifEl).toHaveAttribute(
      "src",
      "https://media4.giphy.com/media/42rO49pxzaMnK/giphy.gif?cid=790b76116dc1bedf27887938cbe8df55b210b12f842af0e9&rid=giphy.gif&ct=g"
    );
    expect(gifEl).toHaveAttribute("alt", "Pac-Man gif");
  });

  it("contains the input field and submit button", () => {
    render(<Main />);
    const nameInputEl = screen.getByRole("textbox");
    expect(nameInputEl).toHaveAttribute("placeholder", "Name");
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("Submit");
  });
});
