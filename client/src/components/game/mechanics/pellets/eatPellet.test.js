import eatPellet from "./eatPellet";

let mockPacmanOne;
let mockPacmanTwo;
let mockUneatenPellet;
let mockEatenPellet;
let mockVariables;

describe("eatPellet", () => {
  beforeEach(() => {
    mockPacmanOne = {
      position: {
        x: 200,
        y: 200,
      },
    };
    mockPacmanTwo = {
      position: {
        x: 250,
        y: 250,
      },
    };
    mockUneatenPellet = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
      hasBeenEaten: false,
    };
    mockEatenPellet = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
      hasBeenEaten: true,
    };
    jest.spyOn(mockUneatenPellet, "changeEatenState");
    jest.spyOn(mockEatenPellet, "changeEatenState");
    mockVariables = {
      score: 0,
    };
  });

  it("calls changeEatenState when colliding with Pac-Man and increases the score", () => {
    eatPellet(mockUneatenPellet, mockPacmanOne, mockVariables);
    expect(mockUneatenPellet.changeEatenState).toHaveBeenCalledTimes(1);
    expect(mockVariables.score).toBe(10);
  });

  it("does not call changeEatenState when colliding with Pac-Man and does not increases the score if the pellet has been eaten", () => {
    eatPellet(mockEatenPellet, mockPacmanOne, mockVariables);
    expect(mockEatenPellet.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
  });

  it("does not call changeEatenState and does not increases the score if the pellet and pacman are not colliding", () => {
    eatPellet(mockEatenPellet, mockPacmanTwo, mockVariables);
    expect(mockUneatenPellet.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
  });
});
