import resumeAudioAndTimers from "./resumeAudioAndTimers";

let mockPacmanDeathAudio;
let mockUnloadedPacmanDeathAudio;
let mockLevelUpAudio;
let mockUnloadedLevelUpAudio;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockResumeTimers;

describe("resumeAudioAndTimers", () => {
  beforeEach(() => {
    mockPacmanDeathAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedPacmanDeathAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedLevelUpAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockResumeTimers = jest.fn();
  });

  it("calls play on the pacman death audio if it is loaded", () => {
    jest.spyOn(mockPacmanDeathAudio, "play");
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeTimers
    );
    expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
  });

  it("does not call play on the pacman death audio if it is unloaded", () => {
    jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
    resumeAudioAndTimers(
      mockUnloadedPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeTimers
    );
    expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
  });

  it("calls play on the level up audio if it is loaded", () => {
    jest.spyOn(mockLevelUpAudio, "play");
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeTimers
    );
    expect(mockLevelUpAudio.play).toHaveBeenCalledTimes(1);
  });

  it("does not call play on the level up audio if it is unloaded", () => {
    jest.spyOn(mockUnloadedLevelUpAudio, "play");
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockUnloadedLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeTimers
    );
    expect(mockUnloadedLevelUpAudio.play).toHaveBeenCalledTimes(0);
  });

  it("calls resumeTimers", () => {
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeTimers
    );
    expect(mockResumeTimers).toHaveBeenCalledTimes(1);
    expect(mockResumeTimers).toHaveBeenCalledWith(
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
  });
});
