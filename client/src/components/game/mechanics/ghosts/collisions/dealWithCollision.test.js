import dealWithCollision from "./dealWithCollision";

let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockGhostAttack;

describe("dealWithCollision", () => {
  beforeEach(() => {
    mockPacman = "pacman";
    mockVariables = {
      score: 100,
      killCount: 2,
    };
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockGhostAttack = jest.fn();
  });

  it("calls ghostAttack if the ghost is not scared or retreating and does not increase the score or kill count", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: false,
      reset: () => undefined,
    };
    dealWithCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(1);
    expect(mockGhostAttack).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
    expect(mockVariables.score).toBe(100);
    expect(mockVariables.killCount).toBe(2);
  });

  it("increases the score and kill count and sends the ghost into retreating mode if the ghost is scared", () => {
    const mockRetreatingTimer = {
      start: () => undefined,
    };
    const mockGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      isRetreating: false,
      changeRetreatingState: () => undefined,
      retreatingTimer: mockRetreatingTimer,
    };
    jest.spyOn(mockGhost, "changeRetreatingState");
    jest.spyOn(mockRetreatingTimer, "start");
    jest.spyOn(mockGhost, "changeScaredState");
    dealWithCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(900);
    expect(mockVariables.killCount).toBe(3);
    expect(mockGhost.changeRetreatingState).toHaveBeenCalledTimes(1);
    expect(mockRetreatingTimer.start).toHaveBeenCalledTimes(1);
    expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(1);
  });

  it("has no effect when the ghost is retreating", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: true,
    };
    dealWithCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(100);
    expect(mockVariables.killCount).toBe(2);
  });
});
