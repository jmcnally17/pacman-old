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
      level: 3,
    };
    mockGhosts = "ghosts";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockResetAfterLevelUp = jest.fn();
  });

  it("runs the callback and increases the level by 1 if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(1);
    expect(mockResetAfterLevelUp).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockEatenPellets,
      mockPowerUps,
      mockCycleTimer
    );
    expect(mockVariables.level).toBe(4);
  });

  it("does not run the callback and leaves the level unchanged if the pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(0);
    expect(mockVariables.level).toBe(3);
  });
});
