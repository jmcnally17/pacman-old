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

  it("plays the retreating audio if it is not playing and any of the retreating timers are running", () => {
    const mockGhostAudioObjects = [
      mockPlayingSirenAudio,
      mockPlayingScaredAudio,
      mockRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockRunningScaredTimer,
      mockRunningRetreatingTimers
    );
    expect(mockRetreatingAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockPlayingSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockPlayingScaredAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockRetreatingAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the retreating audio playing if any of the retreating timers are running", () => {
    const mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockPlayingRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockRunningScaredTimer,
      mockRunningRetreatingTimers
    );
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(0);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(0);
    expect(mockPlayingRetreatingAudio.pause).toHaveBeenCalledTimes(0);
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
      mockRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockScaredTimer,
      mockRetreatingTimers
    );
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(0);
    expect(mockRetreatingAudio.play).toHaveBeenCalledTimes(0);
    expect(mockPlayingSirenAudio.pause).toHaveBeenCalledTimes(0);
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
      mockRetreatingAudio,
    ];
    manageGhostAudio(
      mockGhostAudioObjects,
      mockRunningScaredTimer,
      mockRetreatingTimers
    );
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(0);
    expect(mockRetreatingAudio.play).toHaveBeenCalledTimes(0);
    expect(mockPlayingScaredAudio.pause).toHaveBeenCalledTimes(0);
  });
});