import manageGhostAudio from "./manageGhostAudio";

let mockSirenAudio;
let mockScaredAudio;
let mockGhostAudioObjects;
let mockScaredTimer;

describe("manageGhostAudio", () => {
  it("plays the scared audio if is not playing and the scared timer is running", () => {
    mockSirenAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockScaredAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: true,
    };
    jest.spyOn(mockScaredAudio, "playing");
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockScaredAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the siren audio playing if the scared timer is not running", () => {
    mockSirenAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockScaredAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: false,
    };
    jest.spyOn(mockScaredAudio, "playing");
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockScaredAudio.playing).toHaveBeenCalledTimes(0);
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(0);
  });

  it("plays the siren audio if it is not playing and the scared timer is not running", () => {
    mockSirenAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockScaredAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: false,
    };
    jest.spyOn(mockSirenAudio, "playing");
    jest.spyOn(mockScaredAudio, "pause");
    jest.spyOn(mockSirenAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the scared audio playing if the scared timer is running", () => {
    mockSirenAudio = {
      playing: () => false,
      pause: () => undefined,
      play: () => undefined,
    };
    mockScaredAudio = {
      playing: () => true,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: true,
    };
    jest.spyOn(mockSirenAudio, "playing");
    jest.spyOn(mockScaredAudio, "pause");
    jest.spyOn(mockSirenAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(0);
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(0);
  });
});
