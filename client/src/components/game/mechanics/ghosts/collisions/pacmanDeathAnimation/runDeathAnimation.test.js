import runDeathAnimation from "./runDeathAnimation";

jest.useFakeTimers();

let mockVariables;
let mockCtx;
let mockBoundaries;
let mockPellets;
let mockPowerUps;
let mockPacman;
let mockShrunkPacman;
let mockGhosts;
let mockCycleTimer;
let mockScaredTimer;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockRunDeathAnimation;
let mockDrawBoard;
let mockCheckPacmanLives;

describe("runDeathAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 98,
    };
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockPacman = {
      radians: 0,
      shrink: () => undefined,
    };
    mockShrunkPacman = {
      radians: Math.PI,
      shrink: () => undefined,
    };
    mockGhosts = "ghosts";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockGhostAudioObjects = "ghostAudioObjects";
    mockPacmanDeathAudio = {
      unload: () => undefined,
    };
    mockRunDeathAnimation = jest.fn();
    mockDrawBoard = jest.fn();
    mockCheckPacmanLives = jest.fn();
  });

  it("calls requestAnimationFrame on itself to begin the death animation", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runDeathAnimation(
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));
    jest.runOnlyPendingTimers();
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

  it("calls drawBoard", () => {
    runDeathAnimation(
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(mockDrawBoard).toHaveBeenCalledTimes(1);
    expect(mockDrawBoard).toHaveBeenCalledWith(
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps
    );
  });

  it("calls shrink on Pac-Man if its radians is less than PI", () => {
    jest.spyOn(mockPacman, "shrink");
    runDeathAnimation(
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
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(mockPacman.shrink).toHaveBeenCalledTimes(1);
    expect(mockPacman.shrink).toHaveBeenCalledWith(mockCtx);
  });

  it("calls cancelAnimationFrame when Pac-Man's death animation has finished", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockShrunkPacman,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls unload on the death audio when Pac-Man's death animation has finished", () => {
    jest.spyOn(mockPacmanDeathAudio, "unload");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockShrunkPacman,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(mockPacmanDeathAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("calls checkPacmanLives when Pac-Man's death animation has finished", () => {
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockShrunkPacman,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(mockCheckPacmanLives).toHaveBeenCalledTimes(1);
    expect(mockCheckPacmanLives).toHaveBeenCalledWith(
      mockShrunkPacman,
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
  });
});
