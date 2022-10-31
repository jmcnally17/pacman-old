import resumeAudio from "./resumeAudio";

let mockPacmanDeathAudio;
let mockUnloadedPacmanDeathAudio;
let mockLevelUpAudio;
let mockUnloadedLevelUpAudio;

describe("resumeAudio", () => {
  beforeEach(() => {
    mockPacmanDeathAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedPacmanDeathAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedLevelUpAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
  });

  it("calls play on the pacman death audio if it is loaded", () => {
    jest.spyOn(mockPacmanDeathAudio, "play");
    resumeAudio(mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
  });

  it("does not call play on the pacman death audio if it is unloaded", () => {
    jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
    resumeAudio(mockUnloadedPacmanDeathAudio, mockLevelUpAudio);
    expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
  });

  it("calls play on the level up audio if it is loaded", () => {
    jest.spyOn(mockLevelUpAudio, "play");
    resumeAudio(mockPacmanDeathAudio, mockLevelUpAudio);
    expect(mockLevelUpAudio.play).toHaveBeenCalledTimes(1);
  });

  it("does not call play on the level up audio if it is unloaded", () => {
    jest.spyOn(mockUnloadedLevelUpAudio, "play");
    resumeAudio(mockPacmanDeathAudio, mockUnloadedLevelUpAudio);
    expect(mockUnloadedLevelUpAudio.play).toHaveBeenCalledTimes(0);
  });
});
