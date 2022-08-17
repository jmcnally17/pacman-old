import resetAfterDeath from "./resetAfterDeath";

let mockPacman;
let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockGhost;
let mockGhosts;

describe("resetAfterDeath", () => {
  beforeEach(() => {
    mockPacman = {
      reset: () => undefined,
    };
    mockVariables = {
      lastKeyPressed: "up",
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
  });

  it("resets Pac-Man", () => {
    jest.spyOn(mockPacman, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer
    );
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
  });

  it("resets the last key pressed", () => {
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer
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
      mockScaredTimer
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
      mockScaredTimer
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
      mockScaredTimer
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
      mockScaredTimer
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });
});
