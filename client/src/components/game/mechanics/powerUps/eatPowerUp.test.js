import eatPowerUp from "./eatPowerUp";

let mockPowerUp;
let mockPacmanOne;
let mockPacmanTwo;
let mockVariables;
let mockGhosts;
let mockScaredTimer;
let mockCycleTimer;
let mockScareGhosts;

describe("eatPowerUp", () => {
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
    mockPowerUp = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
    };
    jest.spyOn(mockPowerUp, "changeEatenState");
    mockVariables = {
      score: 0,
      killCount: 2,
    };
    mockGhosts = "ghosts";
    mockScaredTimer = "scaredTimer";
    mockCycleTimer = "cycleTimer";
    mockScareGhosts = jest.fn();
  });

  it("calls changeEatenState when colliding with Pac-Man, increases the score, resets the kill count to 0 and calls the scareGhosts callback", () => {
    eatPowerUp(
      mockPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer,
      mockScareGhosts
    );
    expect(mockPowerUp.changeEatenState).toHaveBeenCalledTimes(1);
    expect(mockVariables.score).toBe(50);
    expect(mockVariables.killCount).toBe(0);
    expect(mockScareGhosts).toHaveBeenCalledTimes(1);
    expect(mockScareGhosts).toHaveBeenCalledWith(
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer
    );
  });

  it("does not call changeEatenState, increases the score, reset the kill count or call the scareGhosts callback if the power up and pacman are not colliding", () => {
    eatPowerUp(
      mockPowerUp,
      mockPacmanTwo,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer,
      mockScareGhosts
    );
    expect(mockPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
    expect(mockVariables.killCount).toBe(2);
    expect(mockScareGhosts).toHaveBeenCalledTimes(0);
  });
});
