import resetAfterGameOver from "./resetAfterGameOver";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockGhost;
let mockGhosts;
let mockPacman;
let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;

describe("resetAfterGameOver", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockGhost = {
      reset: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost];
    mockPacman = {
      reset: () => undefined,
      lives: 0,
    };
    mockVariables = {
      lastKeyPressed: "down",
      level: 5,
      directionEventListener: undefined,
      visibilityEventListener: undefined,
    };
    mockCycleTimer = {
      reset: () => undefined,
    };
    mockScaredTimer = {
      reset: () => undefined,
    };
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
  });

  it("calls changeEatenState on the pellets if they have been eaten", () => {
    jest.spyOn(mockEatenPellet, "changeEatenState");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockEatenPellet.changeEatenState).toHaveBeenCalledTimes(3);
  });

  it("does not call changeEatenState on the pellets if they have not been eaten", () => {
    jest.spyOn(mockUneatenPellet, "changeEatenState");
    resetAfterGameOver(
      mockUneatenPellets,
      mockUneatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockUneatenPellet.changeEatenState).toHaveBeenCalledTimes(0);
  });

  it("calls changeEatenState on the power ups if they have been eaten", () => {
    jest.spyOn(mockEatenPowerUp, "changeEatenState");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockEatenPowerUp.changeEatenState).toHaveBeenCalledTimes(2);
  });

  it("does not call changeEatenState on the power ups if they have not been eaten", () => {
    jest.spyOn(mockUneatenPowerUp, "changeEatenState");
    resetAfterGameOver(
      mockUneatenPellets,
      mockUneatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockUneatenPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
  });

  it("resets the cycle timer", () => {
    jest.spyOn(mockCycleTimer, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the scared timer", () => {
    jest.spyOn(mockScaredTimer, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockScaredTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the ghosts", () => {
    jest.spyOn(mockGhost, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockGhost.reset).toHaveBeenCalledTimes(2);
  });

  it("resets Pac-Man", () => {
    jest.spyOn(mockPacman, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
  });

  it("resets Pac-Man's lives back to 2", () => {
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockPacman.lives).toBe(2);
  });

  it("resets the last key pressed", () => {
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockVariables.lastKeyPressed).toBe("");
  });

  it("resets the level back to 1", () => {
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockVariables.level).toBe(1);
  });

  it("unloads the ghosts siren audio", () => {
    jest.spyOn(mockSirenAudio, "unload");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockGhostAudioObjects[0].unload).toHaveBeenCalledTimes(1);
  });

  it("unloads the ghosts scared audio", () => {
    jest.spyOn(mockScaredAudio, "unload");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockScaredAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("unloads the ghosts retreating audio", () => {
    jest.spyOn(mockRetreatingAudio, "unload");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
    expect(mockRetreatingAudio.unload).toHaveBeenCalledTimes(1);
  });
});
