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
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostScared = {
      name: "scared",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
    };
    mockGhostRetreating = {
      name: "retreating",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
    };
    mockPacmanDeath = {
      name: "pacmanDeath",
      pause: () => undefined,
    };
    mockLevelUp = {
      name: "levelUp",
      pause: () => undefined,
    };
    audioPlayer = new AudioPlayer(
      mockGhostSiren,
      mockGhostScared,
      mockGhostRetreating,
      mockPacmanDeath,
      mockLevelUp
    );
    jest.spyOn(audioPlayer.ghostSiren, "pause");
    jest.spyOn(audioPlayer.ghostScared, "pause");
    jest.spyOn(audioPlayer.ghostRetreating, "pause");
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

  describe("unloadGhost", () => {
    it("calls unload on the ghostSiren", () => {
      jest.spyOn(audioPlayer.ghostSiren, "unload");
      audioPlayer.unloadGhost();
      expect(audioPlayer.ghostSiren.unload).toHaveBeenCalledTimes(1);
    });

    it("calls unload on the ghostScared", () => {
      jest.spyOn(audioPlayer.ghostScared, "unload");
      audioPlayer.unloadGhost();
      expect(audioPlayer.ghostScared.unload).toHaveBeenCalledTimes(1);
    });

    it("calls unload on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "unload");
      audioPlayer.unloadGhost();
      expect(audioPlayer.ghostRetreating.unload).toHaveBeenCalledTimes(1);
    });
  });

  describe("playGhostSiren", () => {
    it("calls pause on the ghostScared", () => {
      audioPlayer.playGhostSiren();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
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
      audioPlayer.playGhostScared();
      expect(audioPlayer.ghostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
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
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostScared", () => {
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls play on the ghostRetreating", () => {
      jest.spyOn(audioPlayer.ghostRetreating, "play");
      audioPlayer.playGhostRetreating();
      expect(audioPlayer.ghostRetreating.play).toHaveBeenCalledTimes(1);
    });
  });

  describe("pauseAll", () => {
    it("calls pause on the ghostSiren", () => {
      audioPlayer.pauseAll();
      expect(audioPlayer.ghostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostScared", () => {
      audioPlayer.pauseAll();
      expect(audioPlayer.ghostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
      audioPlayer.pauseAll();
      expect(audioPlayer.ghostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the pacmanDeath", () => {
      jest.spyOn(audioPlayer.pacmanDeath, "pause");
      audioPlayer.pauseAll();
      expect(audioPlayer.pacmanDeath.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the levelUp", () => {
      jest.spyOn(audioPlayer.levelUp, "pause");
      audioPlayer.pauseAll();
      expect(audioPlayer.levelUp.pause).toHaveBeenCalledTimes(1);
    });
  });
});
