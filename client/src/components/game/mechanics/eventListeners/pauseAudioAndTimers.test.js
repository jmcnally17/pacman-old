import pauseAudioAndTimers from "./pauseAudioAndTimers";

let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockLevelUpAudio;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockPauseTimers;

describe("pauseAudioAndTimers", () => {
  beforeEach(() => {
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
    mockPacmanDeathAudio = {
      _state: "loaded",
      pause: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      pause: () => undefined,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockPauseTimers = jest.fn();
  });

  it("calls pause on the ghosts siren audio object", () => {
    jest.spyOn(mockSirenAudio, "pause");
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the ghosts scared audio object", () => {
    jest.spyOn(mockScaredAudio, "pause");
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the ghosts retreating audio object", () => {
    jest.spyOn(mockRetreatingAudio, "pause");
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the pacman death audio", () => {
    jest.spyOn(mockPacmanDeathAudio, "pause");
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the level up audio", () => {
    jest.spyOn(mockLevelUpAudio, "pause");
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockLevelUpAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pauseTimers", () => {
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers
    );
    expect(mockPauseTimers).toHaveBeenCalledTimes(1);
    expect(mockPauseTimers).toHaveBeenCalledWith(
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
  });
});
