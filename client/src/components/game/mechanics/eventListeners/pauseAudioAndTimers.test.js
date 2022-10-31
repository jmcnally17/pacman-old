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
let mockPauseAudio;
let mockPauseTimers;

describe("pauseAudioAndTimers", () => {
  beforeEach(() => {
    mockSirenAudio = "sirenAudio";
    mockScaredAudio = "scaredAudio";
    mockRetreatingAudio = "retreatingAudio";
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockPacmanDeathAudio = "pacmanDeathAudio";
    mockLevelUpAudio = "levelUpAudio";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockPauseAudio = jest.fn();
    mockPauseTimers = jest.fn();
  });

  it("calls pauseAudio", () => {
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseAudio,
      mockPauseTimers
    );
    expect(mockPauseAudio).toHaveBeenCalledTimes(1);
    expect(mockPauseAudio).toHaveBeenCalledWith(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio
    );
  });

  it("calls pauseTimers", () => {
    pauseAudioAndTimers(
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseAudio,
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
