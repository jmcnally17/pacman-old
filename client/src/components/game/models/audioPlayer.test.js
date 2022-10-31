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
      load: () => undefined,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostScared = {
      name: "scared",
      load: () => undefined,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostRetreating = {
      name: "retreating",
      load: () => undefined,
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

  describe("loadGhost", () => {
    it("calls load on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "load");
      audioPlayer.loadGhost();
      expect(audioPlayer.ghostSiren.load).toHaveBeenCalledTimes(1);
    });

    it("calls load on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "load");
      audioPlayer.loadGhost();
      expect(audioPlayer.ghostScared.load).toHaveBeenCalledTimes(1);
    });

    it("calls load on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "load");
      audioPlayer.loadGhost();
      expect(audioPlayer.ghostRetreating.load).toHaveBeenCalledTimes(1);
    });
  });

  describe("playGhostSiren", () => {
    it("calls pause on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "pause");
      audioPlayer.playGhostSiren();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "pause");
      audioPlayer.playGhostSiren();
      expect(audioPlayer.ghostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "play");
      audioPlayer.playGhostSiren();
      expect(audioPlayer.ghostSiren.play).toHaveBeenCalledTimes(1);
    });
  });

  describe("playGhostScared", () => {
    it("calls pause on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "pause");
      audioPlayer.playGhostScared();
      expect(audioPlayer.ghostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "pause");
      audioPlayer.playGhostScared();
      expect(audioPlayer.ghostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "play");
      audioPlayer.playGhostScared();
      expect(audioPlayer.ghostScared.play).toHaveBeenCalledTimes(1);
    });
  });

  describe("playGhostRetreating", () => {
    it("calls pause on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "pause");
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "pause");
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "play");
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostRetreating.play).toHaveBeenCalledTimes(1);
    });
  });
});
