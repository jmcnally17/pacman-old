import dealWithCollision from "./dealWithCollision";

let mockScaredGhost;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockGhostAudioObjects;
let mockCtx;
let mockBoundaries;
let mockBeginDeathAnimation;

describe("dealWithCollision", () => {
  beforeEach(() => {
    mockScaredGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      isRetreating: false,
      changeRetreatingState: () => undefined,
      retreatingTimer: {
        start: () => undefined,
      },
    };
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
    mockGhostAudioObjects = "mockGhostAudioObjects";
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockBeginDeathAnimation = jest.fn();
    jest.spyOn(mockScaredGhost, "changeRetreatingState");
    jest.spyOn(mockScaredGhost.retreatingTimer, "start");
    jest.spyOn(mockScaredGhost, "changeScaredState");
  });

  it("calls beginDeathAnimation if the ghost is not scared or retreating", () => {
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
      mockGhostAudioObjects,
      mockCtx,
      mockBoundaries,
      mockBeginDeathAnimation
    );
    expect(mockBeginDeathAnimation).toHaveBeenCalledTimes(1);
    expect(mockBeginDeathAnimation).toHaveBeenCalledWith(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
  });

  it("increases the score and kill count if the ghost is scared", () => {
    dealWithCollision(
      mockScaredGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockCtx,
      mockBoundaries,
      mockBeginDeathAnimation
    );
    expect(mockVariables.score).toBe(900);
    expect(mockVariables.killCount).toBe(3);
  });

  it("sends the ghost into retreating mode if the ghost is scared", () => {
    dealWithCollision(
      mockScaredGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockCtx,
      mockBoundaries,
      mockBeginDeathAnimation
    );
    expect(mockScaredGhost.changeRetreatingState).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.retreatingTimer.start).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(1);
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
      mockGhostAudioObjects,
      mockCtx,
      mockBoundaries,
      mockBeginDeathAnimation
    );
    expect(mockBeginDeathAnimation).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(100);
    expect(mockVariables.killCount).toBe(2);
    expect(mockScaredGhost.changeRetreatingState).toHaveBeenCalledTimes(0);
    expect(mockScaredGhost.retreatingTimer.start).toHaveBeenCalledTimes(0);
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(0);
  });
});
