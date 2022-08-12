import resetAfterGameOver from "./resetAfterGameOver";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockGhost;
let mockGhosts;
let mockPacman;
let mockVariables;
let mockCycleTimer;

describe("resetAfterGameOver", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockGhost = {
      reset: () => undefined,
      resetHuntingState: () => undefined,
      resetRetreatingState: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost];
    mockPacman = {
      reset: () => undefined,
      lives: 0,
    };
    mockVariables = {
      lastKeyPressed: "down",
      level: 5,
    };
    mockCycleTimer = {
      reset: () => undefined,
    };
  });

  it("resets the board to its original configuration after game over", () => {
    jest.spyOn(mockEatenPellet, "changeEatenState");
    jest.spyOn(mockEatenPowerUp, "changeEatenState");
    jest.spyOn(mockCycleTimer, "reset");
    jest.spyOn(mockGhost, "reset");
    jest.spyOn(mockGhost, "resetHuntingState");
    jest.spyOn(mockGhost, "resetRetreatingState");
    jest.spyOn(mockPacman, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer
    );
    expect(mockEatenPellet.changeEatenState).toHaveBeenCalledTimes(3);
    expect(mockEatenPowerUp.changeEatenState).toHaveBeenCalledTimes(2);
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
    expect(mockGhost.reset).toHaveBeenCalledTimes(2);
    expect(mockGhost.resetHuntingState).toHaveBeenCalledTimes(2);
    expect(mockGhost.resetRetreatingState).toHaveBeenCalledTimes(2);
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
    expect(mockPacman.lives).toBe(2);
    expect(mockVariables.lastKeyPressed).toBe("");
    expect(mockVariables.level).toBe(1);
  });

  it("does not call changeEatenState on the pellets and power ups if their conditionals are not met", () => {
    jest.spyOn(mockUneatenPellet, "changeEatenState");
    jest.spyOn(mockUneatenPowerUp, "changeEatenState");
    resetAfterGameOver(
      mockUneatenPellets,
      mockUneatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer
    );
    expect(mockUneatenPellet.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockUneatenPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
  });
});
