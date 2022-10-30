import addVisibilityDetection from "./addVisibilityDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockLevelUpAudio;
let mockPauseAudioAndTimers;
let mockResumeAudioAndTimers;
let visibilityChange;

describe("addVisibilityDetection", () => {
  beforeEach(() => {
    mockVariables = {
      isWindowVisible: true,
      isGamePaused: false,
      visibilityEventListener: null,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockGhostAudioObjects = "ghostAudioObjects";
    mockPacmanDeathAudio = "pacmanDeathAudio";
    mockLevelUpAudio = "levelUpAudio";
    mockPauseAudioAndTimers = jest.fn();
    mockResumeAudioAndTimers = jest.fn();
    visibilityChange = new Event("visibilitychange");
  });

  it("sets visibilityEventListener in the variables object to the arrow function that defines the event listener", () => {
    addVisibilityDetection(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockPauseAudioAndTimers,
      mockResumeAudioAndTimers
    );
    expect(mockVariables.visibilityEventListener).toEqual(expect.any(Function));
  });

  describe("adds an event listener to", () => {
    it("change isWindowVisible to false if it is initially true and if isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers
      );
      window.dispatchEvent(visibilityChange);
      expect(mockVariables.isWindowVisible).toBeFalsy();
    });

    it("change isWindowVisible to true if it is intially false and if isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers
      );
      mockVariables.isWindowVisible = false;
      window.dispatchEvent(visibilityChange);
      expect(mockVariables.isWindowVisible).toBeTruthy();
    });

    it("call pauseAudioAndTimers if isWindowVisible is intially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers
      );
      window.dispatchEvent(visibilityChange);
      expect(mockPauseAudioAndTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseAudioAndTimers).toHaveBeenCalledWith(
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("call resumeAudioAndTimers if isWindowVisible is intially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers
      );
      mockVariables.isWindowVisible = false;
      window.dispatchEvent(visibilityChange);
      expect(mockResumeAudioAndTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeAudioAndTimers).toHaveBeenCalledWith(
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });
  });
});
