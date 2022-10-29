import addVisibilityDetection from "./addVisibilityDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockUnloadedPacmanDeathAudio;
let mockLevelUpAudio;
let mockUnloadedLevelUpAudio;
let mockPauseTimers;
let mockResumeTimers;
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
      play: () => undefined,
    };
    mockUnloadedPacmanDeathAudio = {
      _state: "unloaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockUnloadedLevelUpAudio = {
      _state: "unloaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockPauseTimers = jest.fn();
    mockResumeTimers = jest.fn();
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
      mockPauseTimers,
      mockResumeTimers
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
        mockPauseTimers,
        mockResumeTimers
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
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      window.dispatchEvent(visibilityChange);
      expect(mockVariables.isWindowVisible).toBeTruthy();
    });

    it("call pause on the ghosts siren audio object if windowIsVisibly is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockSirenAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the ghosts scared audio object if isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockScaredAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the ghosts retreating audio object if isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockRetreatingAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the pacman death audio if it is loaded and isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockPacmanDeathAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("not call pause on the pacman death audio if it is unloaded and isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockUnloadedPacmanDeathAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockUnloadedPacmanDeathAudio.pause).toHaveBeenCalledTimes(0);
    });

    it("call play on the pacman death audio if it is loaded and isWindowVisible is initially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      jest.spyOn(mockPacmanDeathAudio, "play");
      window.dispatchEvent(visibilityChange);
      expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
    });

    it("not call play on the pacman death audio if it is unloaded and isWindowVisible is initially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
      window.dispatchEvent(visibilityChange);
      expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
    });

    it("call pause on the level up audio if it is loaded and isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockLevelUpAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockLevelUpAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("not call pause on the level up audio if it is unloaded and isWindowVisible is initially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockUnloadedLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockUnloadedLevelUpAudio, "pause");
      window.dispatchEvent(visibilityChange);
      expect(mockUnloadedLevelUpAudio.pause).toHaveBeenCalledTimes(0);
    });

    it("call play on the level up audio if it is loaded and isWindowVisible is initially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      jest.spyOn(mockLevelUpAudio, "play");
      window.dispatchEvent(visibilityChange);
      expect(mockLevelUpAudio.play).toHaveBeenCalledTimes(1);
    });

    it("not call play on the level up audio if it is unloaded and isWindowVisible is initially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockUnloadedLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      jest.spyOn(mockUnloadedLevelUpAudio, "play");
      window.dispatchEvent(visibilityChange);
      expect(mockUnloadedLevelUpAudio.play).toHaveBeenCalledTimes(0);
    });

    it("to call pauseTimers if isWindowVisible is intially true and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      window.dispatchEvent(visibilityChange);
      expect(mockPauseTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("to call resumeTimers if isWindowVisible is intially false and isGamePaused is false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isWindowVisible = false;
      window.dispatchEvent(visibilityChange);
      expect(mockResumeTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });
  });
});
