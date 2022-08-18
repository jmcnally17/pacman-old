import addVisibilityDetection from "./addVisibilityDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockSirenAudio;
let mockScaredAudio;
let mockGhostAudioObjects;
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
      play: () => undefined,
    };
    mockScaredAudio = {
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockPauseTimers = jest.fn();
    mockResumeTimers = jest.fn();
    visibilityChange = new Event("visibilitychange");
    addVisibilityDetection(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPauseTimers,
      mockResumeTimers
    );
  });

  it("sets visibilityEventListener in the variables object to the arrow function that defines the event listener", () => {
    expect(mockVariables.visibilityEventListener).toEqual(expect.any(Function));
  });

  describe("adds an event listener", () => {
    it("to change windowIsVisible to false if it is initially true", () => {
      mockVariables.windowIsVisible = true;
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("to change windowIsVisible to true if it is intially false", () => {
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("calls pause on the siren audio object if windowIsVisibly is initially true", () => {
      jest.spyOn(mockSirenAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the siren audio object if windowIsVisibly is initially false", () => {
      mockVariables.windowIsVisible = false;
      jest.spyOn(mockSirenAudio, "play");
      document.dispatchEvent(visibilityChange);
      expect(mockSirenAudio.play).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the scared audio object if windowIsVisibly is initially true", () => {
      jest.spyOn(mockScaredAudio, "pause");
      document.dispatchEvent(visibilityChange);
      expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the scared audio object if windowIsVisibly is initially false", () => {
      mockVariables.windowIsVisible = false;
      jest.spyOn(mockScaredAudio, "play");
      document.dispatchEvent(visibilityChange);
      expect(mockScaredAudio.play).toHaveBeenCalledTimes(1);
    });

    it("to call pauseTimers if windowIsVisible is intially true", () => {
      document.dispatchEvent(visibilityChange);
      expect(mockPauseTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("to call resumeTimers if windowIsVisible is intially false", () => {
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
