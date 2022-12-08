import AudioPlayer from "./audioPlayer";

let mockGhostSiren;
let mockGhostScared;
let mockGhostRetreating;
let mockPacmanDeath;
let mockUnloadedPacmanDeath;
let mockLevelUp;
let mockUnloadedLevelUp;
let audioPlayer;

describe("AudioPlayer", () => {
  beforeEach(() => {
    mockGhostSiren = {
      name: "siren",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockGhostScared = {
      name: "scared",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockGhostRetreating = {
      name: "retreating",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockPacmanDeath = {
      name: "pacmanDeath",
      _state: "loaded",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockUnloadedPacmanDeath = {
      name: "unloadedPacmanDeath",
      _state: "unloaded",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockLevelUp = {
      name: "levelUp",
      _state: "loaded",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    mockUnloadedLevelUp = {
      name: "unloadedLevelUp",
      _state: "unloaded",
      load: () => undefined,
      unload: () => undefined,
      pause: () => undefined,
      play: () => undefined,
      wantsToPlay: undefined,
    };
    audioPlayer = new AudioPlayer(
      mockGhostSiren,
      mockGhostScared,
      mockGhostRetreating,
      mockPacmanDeath,
      mockLevelUp
    );
    jest.spyOn(mockGhostSiren, "pause");
    jest.spyOn(mockGhostScared, "pause");
    jest.spyOn(mockGhostRetreating, "pause");
    jest.spyOn(mockPacmanDeath, "play");
    jest.spyOn(mockLevelUp, "play");
  });

  it("has each audio object as a constructor variable", () => {
    expect(audioPlayer.ghostSiren).toEqual(mockGhostSiren);
    expect(audioPlayer.ghostScared).toEqual(mockGhostScared);
    expect(audioPlayer.ghostRetreating).toEqual(mockGhostRetreating);
    expect(audioPlayer.pacmanDeath).toEqual(mockPacmanDeath);
    expect(audioPlayer.levelUp).toEqual(mockLevelUp);
  });

  it("sets wantsToPlay on each audio object to false", () => {
    expect(audioPlayer.ghostSiren.wantsToPlay).toBe(false);
    expect(audioPlayer.ghostScared.wantsToPlay).toBe(false);
    expect(audioPlayer.ghostRetreating.wantsToPlay).toBe(false);
    expect(audioPlayer.pacmanDeath.wantsToPlay).toBe(false);
    expect(audioPlayer.levelUp.wantsToPlay).toBe(false);
  });

  describe("loadGhost", () => {
    it("calls load on the ghostSiren", () => {
      jest.spyOn(mockGhostSiren, "load");
      audioPlayer.loadGhost();
      expect(mockGhostSiren.load).toHaveBeenCalledTimes(1);
    });

    it("calls load on the ghostScared", () => {
      jest.spyOn(mockGhostScared, "load");
      audioPlayer.loadGhost();
      expect(mockGhostScared.load).toHaveBeenCalledTimes(1);
    });

    it("calls load on the ghostRetreating", () => {
      jest.spyOn(mockGhostRetreating, "load");
      audioPlayer.loadGhost();
      expect(mockGhostRetreating.load).toHaveBeenCalledTimes(1);
    });
  });

  describe("unloadGhost", () => {
    it("calls unload on the ghostSiren", () => {
      jest.spyOn(mockGhostSiren, "unload");
      audioPlayer.unloadGhost();
      expect(mockGhostSiren.unload).toHaveBeenCalledTimes(1);
    });

    it("calls unload on the ghostScared", () => {
      jest.spyOn(mockGhostScared, "unload");
      audioPlayer.unloadGhost();
      expect(mockGhostScared.unload).toHaveBeenCalledTimes(1);
    });

    it("calls unload on the ghostRetreating", () => {
      jest.spyOn(mockGhostRetreating, "unload");
      audioPlayer.unloadGhost();
      expect(mockGhostRetreating.unload).toHaveBeenCalledTimes(1);
    });
  });

  describe("playGhostSiren", () => {
    beforeEach(() => {
      mockGhostScared.wantsToPlay = true;
      mockGhostRetreating.wantsToPlay = true;
      mockGhostSiren.wantsToPlay = false;
    });

    it("calls pause on the ghostScared", () => {
      audioPlayer.playGhostSiren();
      expect(mockGhostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostScared to false", () => {
      audioPlayer.playGhostSiren();
      expect(mockGhostScared.wantsToPlay).toBe(false);
    });

    it("calls pause on the ghostRetreating", () => {
      audioPlayer.playGhostSiren();
      expect(mockGhostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostRetreating to false", () => {
      audioPlayer.playGhostSiren();
      expect(mockGhostRetreating.wantsToPlay).toBe(false);
    });

    it("calls play on the ghostSiren", () => {
      jest.spyOn(mockGhostSiren, "play");
      audioPlayer.playGhostSiren();
      expect(mockGhostSiren.play).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostSiren to true", () => {
      audioPlayer.playGhostSiren();
      expect(mockGhostSiren.wantsToPlay).toBe(true);
    });
  });

  describe("playGhostScared", () => {
    beforeEach(() => {
      mockGhostSiren.wantsToPlay = true;
      mockGhostRetreating.wantsToPlay = true;
      mockGhostScared.wantsToPlay = false;
    });

    it("calls pause on the ghostSiren", () => {
      audioPlayer.playGhostScared();
      expect(mockGhostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostSiren to false", () => {
      audioPlayer.playGhostScared();
      expect(mockGhostSiren.wantsToPlay).toBe(false);
    });

    it("calls pause on the ghostRetreating", () => {
      audioPlayer.playGhostScared();
      expect(mockGhostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostRetreating to false", () => {
      audioPlayer.playGhostScared();
      expect(mockGhostRetreating.wantsToPlay).toBe(false);
    });

    it("calls play on the ghostScared", () => {
      jest.spyOn(mockGhostScared, "play");
      audioPlayer.playGhostScared();
      expect(mockGhostScared.play).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostScared to true", () => {
      audioPlayer.playGhostScared();
      expect(mockGhostScared.wantsToPlay).toBe(true);
    });
  });

  describe("playGhostRetreating", () => {
    beforeEach(() => {
      mockGhostSiren.wantsToPlay = true;
      mockGhostScared.wantsToPlay = true;
      mockGhostRetreating.wantsToPlay = false;
    });

    it("calls pause on the ghostSiren", () => {
      audioPlayer.playGhostRetreating();
      expect(mockGhostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostSiren to false", () => {
      audioPlayer.playGhostRetreating();
      expect(mockGhostSiren.wantsToPlay).toBe(false);
    });

    it("calls pause on the ghostScared", () => {
      audioPlayer.playGhostRetreating();
      expect(mockGhostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostScared to false", () => {
      audioPlayer.playGhostRetreating();
      expect(mockGhostScared.wantsToPlay).toBe(false);
    });

    it("calls play on the ghostRetreating", () => {
      jest.spyOn(mockGhostRetreating, "play");
      audioPlayer.playGhostRetreating();
      expect(mockGhostRetreating.play).toHaveBeenCalledTimes(1);
    });

    it("sets wantsToPlay on ghostRetreating to true", () => {
      audioPlayer.playGhostRetreating();
      expect(mockGhostRetreating.wantsToPlay).toBe(true);
    });
  });

  describe("loadAndPlayPacmanDeath", () => {
    it("calls load on pacmanDeath", () => {
      jest.spyOn(mockPacmanDeath, "load");
      audioPlayer.loadAndPlayPacmanDeath();
      expect(mockPacmanDeath.load).toHaveBeenCalledTimes(1);
    });

    it("calls play on pacmanDeath", () => {
      audioPlayer.loadAndPlayPacmanDeath();
      expect(mockPacmanDeath.play).toHaveBeenCalledTimes(1);
    });
  });

  describe("unloadPacmanDeath", () => {
    it("calls unload on pacmanDeath", () => {
      jest.spyOn(mockPacmanDeath, "unload");
      audioPlayer.unloadPacmanDeath();
      expect(mockPacmanDeath.unload).toHaveBeenCalledTimes(1);
    });
  });

  describe("loadAndPlayLevelUp", () => {
    it("calls load on levelUp", () => {
      jest.spyOn(mockLevelUp, "load");
      audioPlayer.loadAndPlayLevelUp();
      expect(mockLevelUp.load).toHaveBeenCalledTimes(1);
    });

    it("calls play on levelUp", () => {
      audioPlayer.loadAndPlayLevelUp();
      expect(mockLevelUp.play).toHaveBeenCalledTimes(1);
    });
  });

  describe("unloadLevelUp", () => {
    it("calls unload on levelUp", () => {
      jest.spyOn(mockLevelUp, "unload");
      audioPlayer.unloadLevelUp();
      expect(mockLevelUp.unload).toHaveBeenCalledTimes(1);
    });
  });

  describe("playPacmanDeathAndLevelUpIfLoaded", () => {
    it("calls play on pacmanDeath if its state is loaded", () => {
      audioPlayer.playPacmanDeathAndLevelUpIfLoaded();
      expect(mockPacmanDeath.play).toHaveBeenCalledTimes(1);
    });

    it("does not call play on pacmanDeath if its state is unloaded", () => {
      audioPlayer.pacmanDeath = mockUnloadedPacmanDeath;
      jest.spyOn(mockUnloadedPacmanDeath, "play");
      audioPlayer.playPacmanDeathAndLevelUpIfLoaded();
      expect(mockUnloadedPacmanDeath.play).toHaveBeenCalledTimes(0);
    });

    it("calls play on levelUp if its state is unloaded", () => {
      audioPlayer.playPacmanDeathAndLevelUpIfLoaded();
      expect(mockLevelUp.play).toHaveBeenCalledTimes(1);
    });

    it("does not call play on levelUp if its state is unloaded", () => {
      audioPlayer.levelUp = mockUnloadedLevelUp;
      jest.spyOn(mockUnloadedLevelUp, "play");
      audioPlayer.playPacmanDeathAndLevelUpIfLoaded();
      expect(mockUnloadedLevelUp.play).toHaveBeenCalledTimes(0);
    });
  });

  describe("pauseAll", () => {
    it("calls pause on the ghostSiren", () => {
      audioPlayer.pauseAll();
      expect(mockGhostSiren.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostScared", () => {
      audioPlayer.pauseAll();
      expect(mockGhostScared.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghostRetreating", () => {
      audioPlayer.pauseAll();
      expect(mockGhostRetreating.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the pacmanDeath", () => {
      jest.spyOn(mockPacmanDeath, "pause");
      audioPlayer.pauseAll();
      expect(mockPacmanDeath.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the levelUp", () => {
      jest.spyOn(mockLevelUp, "pause");
      audioPlayer.pauseAll();
      expect(mockLevelUp.pause).toHaveBeenCalledTimes(1);
    });
  });
});
