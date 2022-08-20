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
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
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
    mockRunDeathAnimation = jest.fn();
    mockDrawBoard = jest.fn();
    mockCheckPacmanLives = jest.fn();
  });

  it("calls pause on each of the ghost audio objects", () => {
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "pause");
    jest.spyOn(mockRetreatingAudio, "pause");
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
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls cancelAnimationFrame to stop any movement on the board", () => {
    jest.spyOn(global, "cancelAnimationFrame");
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
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(98);
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
      mockGhostAudioObjects
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
      mockRunDeathAnimation,
      mockDrawBoard,
      mockCheckPacmanLives
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(2);
    expect(cancelAnimationFrame).toHaveBeenNthCalledWith(1, 98);
    expect(cancelAnimationFrame).toHaveBeenNthCalledWith(
      2,
      mockVariables.animationId
    );
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
