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
    mockVariables = {
      score: 0,
    };
  });

  it("calls changeEatenState when colliding with Pac-Man and increases the score", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPellet,
      "changeEatenState"
    );
    eatPellet(mockUneatenPellet, mockPacmanOne, mockVariables);
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(1);
    expect(mockVariables.score).toBe(10);
  });

  it("does not call changeEatenState when colliding with Pac-Man and does not increases the score if the pellet has been eaten", () => {
    const changeEatenStateSpy = jest.spyOn(mockEatenPellet, "changeEatenState");
    eatPellet(mockEatenPellet, mockPacmanOne, mockVariables);
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
  });

  it("does not call changeEatenState and does not increases the score if the pellet and pacman are not colliding", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPellet,
      "changeEatenState"
    );
    eatPellet(mockEatenPellet, mockPacmanTwo, mockVariables);
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
  });
});
