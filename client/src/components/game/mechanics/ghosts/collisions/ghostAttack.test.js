import ghostAttack from "./ghostAttack";

let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockEndGame;
let mockResetAfterDeath;

describe("ghostAttack", () => {
  beforeEach(() => {
    mockVariables = "variables";
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
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
      mockScaredTimer,
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
      mockCycleTimer,
      mockScaredTimer
    );
  });

  it("decreases Pac-Man's lives by 1 when he has lives left", () => {
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
      mockScaredTimer,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockPacman.lives).toBe(1);
  });

  it("calls resetAfterDeath when Pac-Man has lives left", () => {
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
      mockScaredTimer,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(1);
    expect(mockResetAfterDeath).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer
    );
  });
});
