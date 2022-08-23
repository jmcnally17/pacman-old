import runLevelUpAnimation from "./runLevelUpAnimation";

jest.useFakeTimers();

let mockVariables;
let mockPacman;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockCtx;
let mockGhostAudioObjects;
let mockLevelUpAudio;
let mockRunLevelUpAnimation;
let mockResetAfterLevelUp;

describe("runLevelUpAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 54,
      levelUpCount: 0,
      level: 4,
    };
    mockPacman = "pacman";
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockCtx = {
      font: undefined,
      fillStyle: undefined,
      textAlign: undefined,
      fillText: () => undefined,
    };
    mockGhostAudioObjects = "ghostAudioObjects";
    mockLevelUpAudio = {
      unload: () => undefined,
    };
    mockRunLevelUpAnimation = jest.fn();
    mockResetAfterLevelUp = jest.fn();
  });

  it("calls requestAnimationFrame on itself to begin the level up animation", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));
    jest.runOnlyPendingTimers();
    expect(mockRunLevelUpAnimation).toHaveBeenCalledTimes(1);
    expect(mockRunLevelUpAnimation).toHaveBeenCalledWith(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio
    );
  });

  it("calls the necessary commands on ctx to fill the level up text", () => {
    jest.spyOn(mockCtx, "fillText");
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(mockCtx.font).toBe("40px Arial");
    expect(mockCtx.fillStyle).toBe("yellow");
    expect(mockCtx.textAlign).toBe("center");
    expect(mockCtx.fillText).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillText).toHaveBeenCalledWith("Level Up!", 448, 576);
  });

  it("increases the levelUpCount by 1", () => {
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(mockVariables.levelUpCount).toBe(1);
  });

  it("calls cancelAnimationFrame when the level up count reaches 350", () => {
    mockVariables.levelUpCount = 350;
    jest.spyOn(global, "cancelAnimationFrame");
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls unload on the level up audio object when the level up count reaches 350", () => {
    mockVariables.levelUpCount = 350;
    jest.spyOn(mockLevelUpAudio, "unload");
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(mockLevelUpAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("increases the level by 1 when the level up count reaches 350", () => {
    mockVariables.levelUpCount = 350;
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(mockVariables.level).toBe(5);
  });

  it("calls resetAfterLevelUp when the level up count reaches 350", () => {
    mockVariables.levelUpCount = 350;
    runLevelUpAnimation(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockLevelUpAudio,
      mockRunLevelUpAnimation,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(1);
    expect(mockResetAfterLevelUp).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
  });
});
