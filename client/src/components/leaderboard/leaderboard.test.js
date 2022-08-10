import { render, screen, within } from "@testing-library/react";
import Leaderboard from "./leaderboard";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockScores = [
  { name: "Molly", points: 11390 },
  { name: "Bob", points: 9830 },
  { name: "Andrew", points: 4620 },
];

const server = setupServer(
  rest.get("http://localhost:9000/backend/scores", (req, res, ctx) => {
    return res(
      ctx.json({
        scores: mockScores,
      })
    );
  })
);

let mockScore;

describe("Leaderboard", () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    mockScore = {
      points: 2000,
    };
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

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

  it("fetches the scores from the database and displays them in the table", async () => {
    render(<Leaderboard score={mockScore} />);

    const entryOneEl = await screen.findByRole("row", { name: 0 });
    expect(
      within(entryOneEl).getByRole("cell", { name: 1 })
    ).toBeInTheDocument();
    expect(
      within(entryOneEl).getByRole("cell", { name: "Molly" })
    ).toBeInTheDocument();
    expect(
      within(entryOneEl).getByRole("cell", { name: 11390 })
    ).toBeInTheDocument();

    const entryTwoEl = await screen.findByRole("row", { name: 1 });
    expect(
      within(entryTwoEl).getByRole("cell", { name: 2 })
    ).toBeInTheDocument();
    expect(
      within(entryTwoEl).getByRole("cell", { name: "Bob" })
    ).toBeInTheDocument();
    expect(
      within(entryTwoEl).getByRole("cell", { name: 9830 })
    ).toBeInTheDocument();

    const entryThreeEl = await screen.findByRole("row", { name: 2 });
    expect(
      within(entryThreeEl).getByRole("cell", { name: 3 })
    ).toBeInTheDocument();
    expect(
      within(entryThreeEl).getByRole("cell", { name: "Andrew" })
    ).toBeInTheDocument();
    expect(
      within(entryThreeEl).getByRole("cell", { name: 4620 })
    ).toBeInTheDocument();
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
