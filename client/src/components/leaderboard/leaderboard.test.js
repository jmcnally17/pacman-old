import { render, screen } from "@testing-library/react";
import Leaderboard from "./leaderboard";

let mockScore;

describe("Leaderboard", () => {
  beforeEach(() => {
    mockScore = {
      points: 2000,
    };
  });

  it("contains the headings for Game over and the number of points scored", () => {
    render(<Leaderboard score={mockScore} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Game Over"
    );
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "You scored 2000 points"
    );
  });

  it("contains the leaderboard table", () => {
    render(<Leaderboard score={mockScore} />);
    expect(screen.getByRole("table")).toHaveAttribute("class", "list");
  });

  it("contains the table headings", () => {
    render(<Leaderboard score={mockScore} />);
    expect(
      screen.getByRole("columnheader", { name: "Rank" })
    ).toHaveTextContent("Rank");
    expect(
      screen.getByRole("columnheader", { name: "Name" })
    ).toHaveTextContent("Name");
    expect(
      screen.getByRole("columnheader", { name: "Score" })
    ).toHaveTextContent("Score");
  });

  it("contains the buttons to play again and change player", () => {
    render(<Leaderboard score={mockScore} />);
    expect(
      screen.getByRole("button", { name: "Play Again" })
    ).toHaveTextContent("Play Again");
    expect(
      screen.getByRole("button", {
        name: "Change Player",
      })
    ).toHaveTextContent("Change Player");
  });
});
