import resumeAudioAndTimers from "./resumeAudioAndTimers";

let mockPacmanDeathAudio;
let mockLevelUpAudio;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockResumeAudio;
let mockResumeTimers;

describe("resumeAudioAndTimers", () => {
  beforeEach(() => {
    mockPacmanDeathAudio = "pacmanDeathAudio";
    mockLevelUpAudio = "levelUpAudio";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockResumeAudio = jest.fn();
    mockResumeTimers = jest.fn();
  });

  it("calls resumeAudio", () => {
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeAudio,
      mockResumeTimers
    );
    expect(mockResumeAudio).toHaveBeenCalledTimes(1);
    expect(mockResumeAudio).toHaveBeenCalledWith(
      mockPacmanDeathAudio,
      mockLevelUpAudio
    );
  });

  it("calls resumeTimers", () => {
    resumeAudioAndTimers(
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockResumeAudio,
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
