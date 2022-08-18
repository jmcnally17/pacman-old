import checkPacmanGhostCollision from "./checkPacmanGhostCollision";

let mockGhost;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockGhostAudioObjects;
let mockCollisionConditional;
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
    mockGhostAudioObjects = "mockGhostAudioObjects";
    mockCollisionConditional = jest.fn();
    mockDealWithCollision = jest.fn();
  });

  it("calls collisionConditional to check if Pac-Man and the ghost are colliding", () => {
    checkPacmanGhostCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockCollisionConditional).toHaveBeenCalledTimes(1);
    expect(mockCollisionConditional).toHaveBeenCalledWith(
      mockGhost,
      mockPacman
    );
  });

  it("calls dealWithCollision when the collisionConditional is true", () => {
    mockCollisionConditional.mockReturnValue(true);
    checkPacmanGhostCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockCollisionConditional,
      mockDealWithCollision
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
      mockScaredTimer,
      mockGhostAudioObjects
    );
  });

  it("does not call dealWithCollision when the collisionConditional is false", () => {
    mockCollisionConditional.mockReturnValue(false);
    checkPacmanGhostCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockDealWithCollision).toHaveBeenCalledTimes(0);
  });
});
