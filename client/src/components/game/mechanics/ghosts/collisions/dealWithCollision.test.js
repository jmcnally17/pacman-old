import dealWithCollision from "./dealWithCollision";

let mockGhost;
let mockScaredGhost;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockCtx;
let mockBoundaries;
let mockPacmanDeathAudio;
let mockRunDeathAnimation;

describe("dealWithCollision", () => {
  beforeEach(() => {
    mockGhost = {
      isScared: false,
      isRetreating: false,
      reset: () => undefined,
    };
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
    mockSirenAudio = {
      pause: () => undefined,
    };
    mockScaredAudio = {
      pause: () => undefined,
    };
    mockRetreatingAudio = {
      pause: () => undefined,
    };
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPacmanDeathAudio = "pacmanDeathAudio";
    mockRunDeathAnimation = jest.fn();
    jest.spyOn(mockScaredGhost, "changeRetreatingState");
    jest.spyOn(mockScaredGhost.retreatingTimer, "start");
    jest.spyOn(mockScaredGhost, "changeScaredState");
  });

  it("call pause on each of the ghost audio objects if the ghost is not scared or retreating", () => {
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "pause");
    jest.spyOn(mockRetreatingAudio, "pause");
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation
    );
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls runDeathAnimation if the ghost is not scared or retreating", () => {
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation
    );
    expect(mockRunDeathAnimation).toHaveBeenCalledTimes(1);
    expect(mockRunDeathAnimation).toHaveBeenCalledWith(
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation
    );
    expect(mockScaredGhost.changeRetreatingState).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.retreatingTimer.start).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(1);
  });

  it("has no effect when the ghost is retreating", () => {
    const mockRetreatingGhost = {
      isScared: false,
      isRetreating: true,
    };
    dealWithCollision(
      mockRetreatingGhost,
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation
    );
    expect(mockRunDeathAnimation).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(100);
    expect(mockVariables.killCount).toBe(2);
    expect(mockScaredGhost.changeRetreatingState).toHaveBeenCalledTimes(0);
    expect(mockScaredGhost.retreatingTimer.start).toHaveBeenCalledTimes(0);
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(0);
  });
});
