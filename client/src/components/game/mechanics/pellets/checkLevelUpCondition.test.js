import checkLevelUpCondition from "./checkLevelUpCondition";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockResetAfterLevelUp;

describe("checkLevelUpCondition", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockPacman = "pacman";
    mockVariables = {
      animationId: 43,
      level: 3,
    };
    mockGhosts = "ghosts";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockResetAfterLevelUp = jest.fn();
  });

  it("calls cancelAnimationFrame if all pellets have been eaten", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockResetAfterLevelUp
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls resetAfterLevelUp if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(1);
    expect(mockResetAfterLevelUp).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockEatenPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
  });

  it("increases the level by 1 if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockResetAfterLevelUp
    );
    expect(mockVariables.level).toBe(4);
  });

  it("does not call resetAfterLevelUp if the pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(0);
  });

  it("does not increase the level if the pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockResetAfterLevelUp
    );
    expect(mockVariables.level).toBe(3);
  });
});
