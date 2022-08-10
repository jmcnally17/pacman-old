import { render, screen } from "@testing-library/react";
import Game from "./game";

let mockPlayGame;

describe("Game", () => {
  beforeEach(() => {
    mockPlayGame = jest.fn();
  });

  it("calls playGame as soon as the component renders", () => {
    render(<Game callback={mockPlayGame} />);
    expect(mockPlayGame).toHaveBeenCalledTimes(1);
  });

  it("contains the heading with the player's name", () => {
    render(<Game name={"John"} callback={mockPlayGame} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Let's Play John!");
  });

  it("contains the canvas element for the board", () => {
    render(<Game callback={mockPlayGame} />);
    const canvasEl = screen.getByTestId("board");
    expect(canvasEl).toHaveAttribute("width", "896");
    expect(canvasEl).toHaveAttribute("height", "992");
  });

  it("contains the d-pad png image for mobile users", () => {
    render(<Game callback={mockPlayGame} />);
    const dpadEl = screen.getByRole("img");
    expect(dpadEl).toHaveAttribute("src", "./images/dpad.png");
    expect(dpadEl).toHaveAttribute("alt", "dpad");
    expect(dpadEl).toHaveAttribute("useMap", "#dpad");
    expect(dpadEl).toHaveAttribute("height", "200px");
    expect(dpadEl).toHaveAttribute("width", "200px");
  });

  it("contains the map area for each button", () => {
    render(<Game callback={mockPlayGame} />);

    const mapEl = screen.getByTestId("dpad-map");
    expect(mapEl).toHaveAttribute("name", "dpad");

    const upEl = screen.getByTestId("up");
    expect(upEl).toHaveAttribute("shape", "rect");
    expect(upEl).toHaveAttribute("coords", "66,0,133,66");
    expect(upEl).toHaveAttribute("alt", "up");

    const leftEl = screen.getByTestId("left");
    expect(leftEl).toHaveAttribute("shape", "rect");
    expect(leftEl).toHaveAttribute("coords", "0,66,66,133");
    expect(leftEl).toHaveAttribute("alt", "left");

    const rightEl = screen.getByTestId("right");
    expect(rightEl).toHaveAttribute("shape", "rect");
    expect(rightEl).toHaveAttribute("coords", "133,66,200,133");
    expect(rightEl).toHaveAttribute("alt", "right");

    const downEl = screen.getByTestId("down");
    expect(downEl).toHaveAttribute("shape", "rect");
    expect(downEl).toHaveAttribute("coords", "66,133,133,200");
    expect(downEl).toHaveAttribute("alt", "down");
  });
});