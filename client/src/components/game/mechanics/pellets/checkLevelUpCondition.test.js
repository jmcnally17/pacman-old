import checkLevelUpCondition from "./checkLevelUpCondition";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockPacman;
let mockVariables;
let mockGhosts;
let mockPowerUps;
let mockCycleTimer;
let mockScaredTimer;
let mockCtx;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockRunLevelUpAnimation;

describe("checkLevelUpCondition", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockPacman = "pacman";
    mockVariables = {
      animationId: 43,
      level: 3,
    };
    mockGhosts = "ghosts";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockCtx = "ctx";
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
    mockRunLevelUpAnimation = jest.fn();
  });

  it("calls cancelAnimationFrame if all pellets have been eaten", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockRunLevelUpAnimation
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls unload on each ghost audio object if all pellets have been eaten", () => {
    jest.spyOn(mockSirenAudio, "unload");
    jest.spyOn(mockScaredAudio, "unload");
    jest.spyOn(mockRetreatingAudio, "unload");
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockRunLevelUpAnimation
    );
    expect(mockSirenAudio.unload).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.unload).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("calls runLevelUpAnimation if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockRunLevelUpAnimation
    );
    expect(mockRunLevelUpAnimation).toHaveBeenCalledTimes(1);
    expect(mockRunLevelUpAnimation).toHaveBeenCalledWith(
      mockVariables,
      mockPacman,
      mockGhosts,
      mockEatenPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects
    );
  });

  it("does not call runLevelUpAnimation if all pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockGhostAudioObjects,
      mockRunLevelUpAnimation
    );
    expect(mockRunLevelUpAnimation).toHaveBeenCalledTimes(0);
  });
});
