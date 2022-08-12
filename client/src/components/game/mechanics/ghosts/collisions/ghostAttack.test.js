import ghostAttack from "./ghostAttack";

let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockEndGame;
let mockResetAfterDeath;

describe("ghostAttack", () => {
  beforeEach(() => {
    mockVariables = "variables";
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockEndGame = jest.fn();
    mockResetAfterDeath = jest.fn();
  });

  it("calls endGame when Pac-Man has no lives left", () => {
    const mockPacman = {
      lives: 0,
    };
    ghostAttack(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(1);
    expect(mockEndGame).toHaveBeenCalledWith(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer
    );
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(0);
  });

  it("calls resetAfterDeath and decreases Pac-Man's lives by 1 when he has lives left", () => {
    const mockPacman = {
      lives: 2,
    };
    ghostAttack(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(0);
    expect(mockPacman.lives).toBe(1);
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(1);
    expect(mockResetAfterDeath).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer
    );
  });
});
