import AudioPlayer from "../../models/audioPlayer";
import makeAudioPlayer from "./makeAudioPlayer";

let mockMakeGhostAudioObjects;
let mockMakePacmanDeathAudio;
let mockMakeLevelUpAudio;

describe("makeAudioPlayer", () => {
  beforeEach(() => {
    mockMakeGhostAudioObjects = jest.fn();
    mockMakePacmanDeathAudio = jest.fn();
    mockMakeLevelUpAudio = jest.fn();
    mockMakeGhostAudioObjects.mockReturnValue([
      "siren",
      "scared",
      "retreating",
    ]);
  });

  it("calls makeGhostAudioObjects", () => {
    makeAudioPlayer(
      mockMakeGhostAudioObjects,
      mockMakePacmanDeathAudio,
      mockMakeLevelUpAudio
    );
    expect(mockMakeGhostAudioObjects).toHaveBeenCalledTimes(1);
  });

  it("calls makePacmanDeathAudio", () => {
    makeAudioPlayer(
      mockMakeGhostAudioObjects,
      mockMakePacmanDeathAudio,
      mockMakeLevelUpAudio
    );
    expect(mockMakePacmanDeathAudio).toHaveBeenCalledTimes(1);
  });

  it("calls makeLevelUpAudio", () => {
    makeAudioPlayer(
      mockMakeGhostAudioObjects,
      mockMakePacmanDeathAudio,
      mockMakeLevelUpAudio
    );
    expect(mockMakeLevelUpAudio).toHaveBeenCalledTimes(1);
  });

  it("returns the audioPlayer object", () => {
    expect(
      makeAudioPlayer(
        mockMakeGhostAudioObjects,
        mockMakePacmanDeathAudio,
        mockMakeLevelUpAudio
      )
    ).toBeInstanceOf(AudioPlayer);
  });
});
