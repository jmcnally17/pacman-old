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
    mockPacman = {
      radians: Math.PI / 24,
      isShrinking: false,
    };
    mockVariables = {
      score: 100,
      killCount: 2,
      animationId: 97,
    };
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockSirenAudio = {
      unload: () => undefined,
    };
    mockScaredAudio = {
      unload: () => undefined,
    };
    mockRetreatingAudio = {
      unload: () => undefined,
    };
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPacmanDeathAudio = {
      load: () => undefined,
      play: () => undefined,
    };
    mockRunDeathAnimation = jest.fn();
    jest.spyOn(mockScaredGhost, "changeRetreatingState");
    jest.spyOn(mockScaredGhost.retreatingTimer, "start");
    jest.spyOn(mockScaredGhost, "changeScaredState");
  });

  it("sets the radians in Pac-Man to PI / 4 if the ghost is not scared or retreating", () => {
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
    expect(mockPacman.radians).toBe(Math.PI / 4);
  });

  it("calls cancelAnimationFrame if the ghost is not scared or retreating", () => {
    jest.spyOn(global, "cancelAnimationFrame");
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
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls unload on each of the ghost audio objects if the ghost is not scared or retreating", () => {
    jest.spyOn(mockSirenAudio, "unload");
    jest.spyOn(mockScaredAudio, "unload");
    jest.spyOn(mockRetreatingAudio, "unload");
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
    expect(mockSirenAudio.unload).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.unload).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("calls load and play on the pacmanDeathAudio if the ghost is not scared or retreating", () => {
    jest.spyOn(mockPacmanDeathAudio, "load");
    jest.spyOn(mockPacmanDeathAudio, "play");
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
    expect(mockPacmanDeathAudio.load).toHaveBeenCalledTimes(1);
    expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
  });

  it("changes isShrinking in Pac-Man to true if the ghost is not scared or retreating", () => {
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
    expect(mockPacman.isShrinking).toBeTruthy();
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
      mockGhostAudioObjects,
      mockPacmanDeathAudio
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
