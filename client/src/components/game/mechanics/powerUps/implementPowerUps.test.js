import implementPowerUps from "./implementPowerUps";

let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockCtx;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockScaredTimer;
let mockCycleTimer;
let mockEatPowerUp;

describe("implementPowerUps", () => {
  beforeEach(() => {
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      update: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      update: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    jest.spyOn(mockUneatenPowerUp, "update");
    jest.spyOn(mockEatenPowerUp, "update");
    mockCtx = "ctx";
    mockPacman = "pacman";
    mockVariables = "variables";
    mockGhosts = "ghosts";
    mockScaredTimer = "scaredTimer";
    mockCycleTimer = "cycleTimer";
    mockEatPowerUp = jest.fn();
  });

  it("calls the necessary funcions to implement the power up functionality", () => {
    implementPowerUps(
      mockUneatenPowerUps,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer,
      mockEatPowerUp
    );
    expect(mockUneatenPowerUp.update).toHaveBeenCalledTimes(3);
    expect(mockUneatenPowerUp.update).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockUneatenPowerUp.update).toHaveBeenNthCalledWith(2, mockCtx);
    expect(mockUneatenPowerUp.update).toHaveBeenNthCalledWith(3, mockCtx);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(3);
    expect(mockEatPowerUp).toHaveBeenNthCalledWith(
      1,
      mockUneatenPowerUp,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer
    );
    expect(mockEatPowerUp).toHaveBeenNthCalledWith(
      2,
      mockUneatenPowerUp,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer
    );
    expect(mockEatPowerUp).toHaveBeenNthCalledWith(
      3,
      mockUneatenPowerUp,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer
    );
  });

  it("does not call update or eatPowerUp on the power ups if they have been eaten", () => {
    implementPowerUps(
      mockEatenPowerUps,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer,
      mockEatPowerUp
    );
    expect(mockEatenPowerUp.update).toHaveBeenCalledTimes(0);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(0);
  });
});
