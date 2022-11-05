import resetAfterDeath from "./resetAfterDeath";

let mockPacman;
let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockGhost;
let mockGhosts;
let mockAudioPlayer;
let mockRemoveLife;
let mockPlayGame;

describe("resetAfterDeath", () => {
  beforeEach(() => {
    mockPacman = {
      reset: () => undefined,
    };
    mockVariables = {
      lastKeyPressed: "up",
      playerName: "John",
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
    mockAudioPlayer = {
      loadGhost: () => undefined,
    };
    mockRemoveLife = jest.fn();
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
      mockAudioPlayer,
      mockRemoveLife,
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
      mockAudioPlayer,
      mockRemoveLife,
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
      mockAudioPlayer,
      mockRemoveLife,
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
      mockAudioPlayer,
      mockRemoveLife,
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
      mockAudioPlayer,
      mockRemoveLife,
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
      mockAudioPlayer,
      mockRemoveLife,
      mockPlayGame
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls loadGhost on the audioPlayer", () => {
    jest.spyOn(mockAudioPlayer, "loadGhost");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockAudioPlayer,
      mockRemoveLife,
      mockPlayGame
    );
    expect(mockAudioPlayer.loadGhost).toHaveBeenCalledTimes(1);
  });

  it("calls removeLife", () => {
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockAudioPlayer,
      mockRemoveLife,
      mockPlayGame
    );
    expect(mockRemoveLife).toHaveBeenCalledTimes(1);
    expect(mockRemoveLife).toHaveBeenCalledWith(mockPacman);
  });

  it("calls playGame", () => {
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer,
      mockAudioPlayer,
      mockRemoveLife,
      mockPlayGame
    );
    expect(mockPlayGame).toHaveBeenCalledTimes(1);
    expect(mockPlayGame).toHaveBeenCalledWith(
      mockVariables.playerName,
      mockVariables.reactRoot
    );
  });
});
