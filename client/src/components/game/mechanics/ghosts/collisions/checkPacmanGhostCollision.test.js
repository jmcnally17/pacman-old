import checkPacmanGhostCollision from "./checkPacmanGhostCollision";

let mockGhost;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockDealWithCollision;

describe("checkPacmanGhostCollision", () => {
  beforeEach(() => {
    mockGhost = "ghost";
    mockPacman = "pacman";
    mockVariables = "variables";
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockDealWithCollision = jest.fn();
  });

  it("call dealWithCollision when the collisionConditional is true", () => {
    const mockCollisionConditional = jest.fn().mockReturnValue(true);
    checkPacmanGhostCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockCollisionConditional).toHaveBeenCalledTimes(1);
    expect(mockCollisionConditional).toHaveBeenCalledWith(
      mockGhost,
      mockPacman
    );
    expect(mockDealWithCollision).toHaveBeenCalledTimes(1);
    expect(mockDealWithCollision).toHaveBeenCalledWith(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
  });

  it("does not call dealWithCollision when the collisionConditional is false", () => {
    const mockCollisionConditional = jest.fn().mockReturnValue(false);
    checkPacmanGhostCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockCollisionConditional).toHaveBeenCalledTimes(1);
    expect(mockCollisionConditional).toHaveBeenCalledWith(
      mockGhost,
      mockPacman
    );
    expect(mockDealWithCollision).toHaveBeenCalledTimes(0);
  });
});
