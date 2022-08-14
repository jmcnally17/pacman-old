import implementPellets from "./implementPellets";

let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPellet;
let mockEatenPellets;
let mockCtx;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockEatPellet;
let mockCheckLevelUpCondition;

describe("implementPellets", () => {
  beforeEach(() => {
    mockUneatenPellet = {
      hasBeenEaten: false,
      draw: () => undefined,
    };
    mockUneatenPellets = [
      mockUneatenPellet,
      mockUneatenPellet,
      mockUneatenPellet,
    ];
    mockEatenPellet = {
      hasBeenEaten: true,
      draw: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet];
    jest.spyOn(mockUneatenPellet, "draw");
    jest.spyOn(mockEatenPellet, "draw");
    mockCtx = "ctx";
    mockPacman = "pacman";
    mockVariables = "variables";
    mockGhosts = "ghosts";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockEatPellet = jest.fn();
    mockCheckLevelUpCondition = jest.fn();
  });

  it("calls the necessary funcions to implement the pellet functionality", () => {
    implementPellets(
      mockUneatenPellets,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(mockUneatenPellet.draw).toHaveBeenCalledTimes(3);
    expect(mockUneatenPellet.draw).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockUneatenPellet.draw).toHaveBeenNthCalledWith(2, mockCtx);
    expect(mockUneatenPellet.draw).toHaveBeenNthCalledWith(3, mockCtx);
    expect(mockEatPellet).toHaveBeenCalledTimes(3);
    expect(mockEatPellet).toHaveBeenNthCalledWith(
      1,
      mockUneatenPellet,
      mockPacman,
      mockVariables
    );
    expect(mockEatPellet).toHaveBeenNthCalledWith(
      2,
      mockUneatenPellet,
      mockPacman,
      mockVariables
    );
    expect(mockEatPellet).toHaveBeenNthCalledWith(
      3,
      mockUneatenPellet,
      mockPacman,
      mockVariables
    );
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledWith(
      mockUneatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
  });

  it("does not draw the pellets if they have been eaten", () => {
    implementPellets(
      mockEatenPellets,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(mockEatenPellet.draw).toHaveBeenCalledTimes(0);
    expect(mockEatPellet).toHaveBeenCalledTimes(2);
    expect(mockEatPellet).toHaveBeenNthCalledWith(
      1,
      mockEatenPellet,
      mockPacman,
      mockVariables
    );
    expect(mockEatPellet).toHaveBeenNthCalledWith(
      2,
      mockEatenPellet,
      mockPacman,
      mockVariables
    );
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledWith(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
  });
});
