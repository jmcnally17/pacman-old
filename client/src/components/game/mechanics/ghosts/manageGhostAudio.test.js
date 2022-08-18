import manageGhostAudio from "./manageGhostAudio";

let mockSirenAudio;
let mockPlayingSirenAudio;
let mockScaredAudio;
let mockPlayingScaredAudio;
let mockRetreatingAudio;
let mockPlayingRetreatingAudio;
let mockScaredTimer;
let mockRunningScaredTimer;
let mockRetreatingTimer;
let mockRunningRetreatingTimer;
let mockRetreatingTimers;
let mockRunningRetreatingTimers;

describe("manageGhostAudio", () => {
  beforeEach(() => {
    mockSirenAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockPlayingSirenAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockScaredAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockPlayingScaredAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockRetreatingAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockPlayingRetreatingAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockRetreatingTimers = [
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
    ];
    mockRunningRetreatingTimers = [
      mockRunningRetreatingTimer,
      mockRunningRetreatingTimer,
      mockRunningRetreatingTimer,
      mockRunningRetreatingTimer,
    ];
    mockScaredTimer = {
      isRunning: false,
    };
    mockRunningScaredTimer = {
      isRunning: true,
    };
    mockRetreatingTimer = {
      isRunning: false,
    };
    mockRunningRetreatingTimer = {
      isRunning: true,
    };

    jest.spyOn(mockSirenAudio, "playing");
    jest.spyOn(mockSirenAudio, "play");
    jest.spyOn(mockPlayingSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "playing");
    jest.spyOn(mockScaredAudio, "play");
    jest.spyOn(mockPlayingScaredAudio, "pause");
    jest.spyOn(mockRetreatingAudio, "playing");
    jest.spyOn(mockRetreatingAudio, "play");
    jest.spyOn(mockPlayingRetreatingAudio, "pause");
  });

  it("plays the scared audio if is not playing and the scared timer is running", () => {
    const mockGhostAudioObjects = [
      mockPlayingSirenAudio,
      mockScaredAudio,
      mockPlayingRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockRunningScaredTimer,
      mockRetreatingTimers
    );
    expect(mockScaredAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockPlayingSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockPlayingRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the siren audio playing if the scared timer is not running", () => {
    const mockGhostAudioObjects = [
      mockPlayingSirenAudio,
      mockScaredAudio,
      mockPlayingRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockScaredTimer,
      mockRetreatingTimers
    );
    expect(mockScaredAudio.playing).toHaveBeenCalledTimes(0);
    expect(mockPlayingSirenAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockPlayingRetreatingAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(0);
  });

  it("plays the siren audio if it is not playing and the scared timer is not running", () => {
    const mockGhostAudioObjects = [
      mockSirenAudio,
      mockPlayingScaredAudio,
      mockPlayingRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockScaredTimer,
      mockRetreatingTimers
    );
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockPlayingScaredAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockPlayingRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the scared audio playing if the scared timer is running", () => {
    const mockGhostAudioObjects = [
      mockSirenAudio,
      mockPlayingScaredAudio,
      mockPlayingRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockRunningScaredTimer,
      mockRetreatingTimers
    );
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(0);
    expect(mockPlayingScaredAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockPlayingRetreatingAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(0);
  });
});
