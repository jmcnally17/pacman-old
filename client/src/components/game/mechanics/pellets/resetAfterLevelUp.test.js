import resetAfterLevelUp from "./resetAfterLevelUp";

let mockPacman;
let mockVariables;
let mockGhost;
let mockGhosts;
let mockPellet;
let mockPellets;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPlayGame;

describe("resetAfterLevelUp", () => {
  beforeEach(() => {
    mockPacman = {
      reset: () => undefined,
    };
    mockVariables = {
      lastKeyPressed: "up",
      levelUpCount: 1000,
    };
    mockGhost = {
      reset: () => undefined,
    };
    mockPellet = {
      changeEatenState: () => undefined,
    };
    mockEatenPowerUp = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost, mockGhost];
    mockPellets = [mockPellet, mockPellet];
    mockEatenPowerUps = [mockEatenPowerUp];
    mockUneatenPowerUps = [mockUneatenPowerUp];
    mockCycleTimer = {
      reset: () => undefined,
      start: () => undefined,
    };
    mockScaredTimer = {
      reset: () => undefined,
    };
    mockSirenAudio = {
      load: () => undefined,
    };
    mockScaredAudio = {
      load: () => undefined,
    };
    mockRetreatingAudio = {
      load: () => undefined,
    };
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockPlayGame = jest.fn();
  });

  it("calls reset on Pac-Man", () => {
    jest.spyOn(mockPacman, "reset");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the last key pressed", () => {
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockVariables.lastKeyPressed).toBe("");
  });

  it("resets the level up count back to 0", () => {
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockVariables.levelUpCount).toBe(0);
  });

  it("calls reset on the cycle timer", () => {
    jest.spyOn(mockCycleTimer, "reset");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("calls reset on the scared timer", () => {
    jest.spyOn(mockScaredTimer, "reset");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockScaredTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("calls reset on each ghost", () => {
    jest.spyOn(mockGhost, "reset");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockGhost.reset).toHaveBeenCalledTimes(3);
  });

  it("calls changeEatenState on each pellet", () => {
    jest.spyOn(mockPellet, "changeEatenState");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockPellet.changeEatenState).toHaveBeenCalledTimes(2);
  });

  it("calls changeEatenState on each power up if they have been eaten", () => {
    jest.spyOn(mockEatenPowerUp, "changeEatenState");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockEatenPowerUp.changeEatenState).toHaveBeenCalledTimes(1);
  });

  it("does not call changeEatenState on each power up if they have not been eaten", () => {
    jest.spyOn(mockUneatenPowerUp, "changeEatenState");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockUneatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockUneatenPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
  });

  it("calls load on each ghost audio object", () => {
    jest.spyOn(mockSirenAudio, "load");
    jest.spyOn(mockScaredAudio, "load");
    jest.spyOn(mockRetreatingAudio, "load");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockSirenAudio.load).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.load).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.load).toHaveBeenCalledTimes(1);
  });

  it("calls start on the cycle timer to restart it", () => {
    jest.spyOn(mockCycleTimer, "start");
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls playGame to restart the animation frames", () => {
    resetAfterLevelUp(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockEatenPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockPlayGame).toHaveBeenCalledTimes(1);
  });
});
