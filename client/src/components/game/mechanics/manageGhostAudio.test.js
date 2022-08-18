import manageGhostAudio from "./manageGhostAudio";

let mockSirenAudio;
let mockScaredAudio;
let mockGhostAudioObjects;
let mockScaredTimer;

describe("manageGhostAudio", () => {
  it("plays the scared audio if the scared timer is running and the siren audio is playing", () => {
    mockSirenAudio = {
      playing: () => true,
      pause: () => undefined,
    };
    mockScaredAudio = {
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: true,
    };
    jest.spyOn(mockSirenAudio, "playing");
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(1);
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(1);
  });

  it("leaves the siren audio playing if the scared timer is not running", () => {
    mockSirenAudio = {
      playing: () => true,
      pause: () => undefined,
    };
    mockScaredAudio = {
      play: () => undefined,
    };
    mockGhostAudioObjects = [mockSirenAudio, mockScaredAudio];
    mockScaredTimer = {
      isRunning: false,
    };
    jest.spyOn(mockSirenAudio, "playing");
    jest.spyOn(mockSirenAudio, "pause");
    jest.spyOn(mockScaredAudio, "play");
    manageGhostAudio(mockGhostAudioObjects, mockScaredTimer);
    expect(mockSirenAudio.playing).toHaveBeenCalledTimes(0);
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(0);
    expect(mockScaredAudio.play).toHaveBeenCalledTimes(0);
  });
});
