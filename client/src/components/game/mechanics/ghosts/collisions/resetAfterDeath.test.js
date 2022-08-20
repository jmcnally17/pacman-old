import resetAfterDeath from "./resetAfterDeath";

let mockPacman;
let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockGhost;
let mockGhosts;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPlayGame;

describe("resetAfterDeath", () => {
  beforeEach(() => {
    mockPacman = {
      reset: () => undefined,
    };
    mockVariables = {
      lastKeyPressed: "up",
      name: "John",
      reactRoot: "reactRoot",
    };
    mockCycleTimer = {
      reset: () => undefined,
      start: () => undefined,
    };
    mockScaredTimer = {
      reset: () => undefined,
    };
    mockGhost = {
      reset: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost, mockGhost];
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

  it("resets Pac-Man", () => {
    jest.spyOn(mockPacman, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the last key pressed", () => {
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockVariables.lastKeyPressed).toBe("");
  });

  it("resets the cycle timer", () => {
    jest.spyOn(mockCycleTimer, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the scared timer", () => {
    jest.spyOn(mockScaredTimer, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockScaredTimer.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the ghosts", () => {
    jest.spyOn(mockGhost, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockGhost.reset).toHaveBeenCalledTimes(3);
  });

  it("starts the cycle timer again", () => {
    jest.spyOn(mockCycleTimer, "start");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls load on each of the ghost audio objects", () => {
    jest.spyOn(mockSirenAudio, "load");
    jest.spyOn(mockScaredAudio, "load");
    jest.spyOn(mockRetreatingAudio, "load");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockSirenAudio.load).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.load).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.load).toHaveBeenCalledTimes(1);
  });

  it("calls playGame", () => {
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockPlayGame
    );
    expect(mockPlayGame).toHaveBeenCalledTimes(1);
    expect(mockPlayGame).toHaveBeenCalledWith(
      mockVariables.name,
      mockVariables.reactRoot
    );
  });
});
