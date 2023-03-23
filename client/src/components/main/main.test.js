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

  it("contains the sign up button", () => {
    render(<Main />);
    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
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
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Name");
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("contains the instructions text", () => {
    render(<Main />);
    const instructionsEl = screen.getByText(
      "Use the directional keys to move Pac-Man around the board while avoiding the ghosts as best you can. " +
        "Pick up a power up and then attack the ghosts! " +
        "Eat all the pellets on the board to level up. " +
        "Press esc to pause and unpause the game at any time. " +
        "(For mobile and tablet users, a D-pad will appear below the board for you to move Pac-Man around)"
    );
    expect(instructionsEl).toBeInTheDocument();
  });
});
