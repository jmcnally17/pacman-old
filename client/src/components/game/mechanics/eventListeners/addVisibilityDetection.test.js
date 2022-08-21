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
let mockPauseTimers;
let mockResumeTimers;
let visibilityChange;

describe("addVisibilityDetection", () => {
  beforeEach(() => {
    mockVariables = {
      windowIsVisible: true,
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
      mockPauseTimers,
      mockResumeTimers
    );
    expect(mockVariables.visibilityEventListener).toEqual(expect.any(Function));
  });

  describe("adds an event listener", () => {
    it("to change windowIsVisible to false if it is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.windowIsVisible = true;
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("to change windowIsVisible to true if it is intially false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("calls pause on the ghosts siren audio object if windowIsVisibly is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockSirenAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghosts scared audio object if windowIsVisibly is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockScaredAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghosts retreating audio object if windowIsVisible is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockRetreatingAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the pacman death audio if it is loaded and windowIsVisible is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockPacmanDeathAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("does not call pause on the pacman death audio if it is unloaded and windowIsVisible is initially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockUnloadedPacmanDeathAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockUnloadedPacmanDeathAudio.pause).toHaveBeenCalledTimes(0);
    });

    it("calls play on the pacman death audio if it is loaded and windowIsVisible is initially false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.windowIsVisible = false;
      jest.spyOn(mockPacmanDeathAudio, "play");
      document.dispatchEvent(visibilityChange);
      expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
    });

    it("does not call play on the pacman death audio if it is unloaded and windowIsVisible is initially false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.windowIsVisible = false;
      jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
      document.dispatchEvent(visibilityChange);
      expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
    });

    it("to call pauseTimers if windowIsVisible is intially true", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      document.dispatchEvent(visibilityChange);
      expect(mockPauseTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("to call resumeTimers if windowIsVisible is intially false", () => {
      addVisibilityDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.windowIsVisible = false;
      document.dispatchEvent(visibilityChange);
      expect(mockResumeTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });
  });
});
