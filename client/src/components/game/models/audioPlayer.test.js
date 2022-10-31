import AudioPlayer from "./audioPlayer";

let mockGhostSiren;
let mockGhostScared;
let mockGhostRetreating;
let mockPacmanDeath;
let mockLevelUp;
let audioPlayer;

describe("AudioPlayer", () => {
  beforeEach(() => {
    mockGhostSiren = {
      name: "siren",
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostScared = {
      name: "scared",
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostRetreating = {
      name: "retreating",
      pause: () => undefined,
      play: () => undefined,
    };
    mockPacmanDeath = {
      name: "pacmanDeath",
    };
    mockLevelUp = {
      name: "levelUp",
    };
    audioPlayer = new AudioPlayer(
      mockGhostSiren,
      mockGhostScared,
      mockGhostRetreating,
      mockPacmanDeath,
      mockLevelUp
    );
  });

  it("has each Howl object as a constructor variable passed in", () => {
    expect(audioPlayer.ghostSiren).toEqual(mockGhostSiren);
    expect(audioPlayer.ghostScared).toEqual(mockGhostScared);
    expect(audioPlayer.ghostRetreating).toEqual(mockGhostRetreating);
    expect(audioPlayer.pacmanDeath).toEqual(mockPacmanDeath);
    expect(audioPlayer.levelUp).toEqual(mockLevelUp);
  });

  describe("playSiren", () => {
    it("calls pause on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "pause");
      audioPlayer.playSiren();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "pause");
      audioPlayer.playSiren();
      expect(audioPlayer.ghostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "play");
      audioPlayer.playSiren();
      expect(audioPlayer.ghostSiren.play).toHaveBeenCalledTimes(1);
    });
  });
});
