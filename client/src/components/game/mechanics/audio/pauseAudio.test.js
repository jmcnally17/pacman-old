import pauseAudio from "./pauseAudio";

let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockLevelUpAudio;

describe("pauseAudio", () => {
  beforeEach(() => {
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
      pause: () => undefined,
    };
    mockLevelUpAudio = {
      pause: () => undefined,
    };
  });

  it("calls pause on the ghosts siren audio object", () => {
    jest.spyOn(mockSirenAudio, "pause");
    pauseAudio(mockGhostAudioObjects, mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the ghosts scared audio object", () => {
    jest.spyOn(mockScaredAudio, "pause");
    pauseAudio(mockGhostAudioObjects, mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the ghosts retreating audio object", () => {
    jest.spyOn(mockRetreatingAudio, "pause");
    pauseAudio(mockGhostAudioObjects, mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the pacman death audio", () => {
    jest.spyOn(mockPacmanDeathAudio, "pause");
    pauseAudio(mockGhostAudioObjects, mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the level up audio", () => {
    jest.spyOn(mockLevelUpAudio, "pause");
    pauseAudio(mockGhostAudioObjects, mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockLevelUpAudio.pause).toHaveBeenCalledTimes(1);
  });
});
