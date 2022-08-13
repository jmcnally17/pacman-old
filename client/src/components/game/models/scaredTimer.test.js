import ScaredTimer from "./scaredTimer";

jest.useFakeTimers();

let mockGhost;
let mockGhosts;
let scaredTimer;

describe("ScaredTimer", () => {
  beforeEach(() => {
    mockGhost = {
      changeScaredState: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
    scaredTimer = new ScaredTimer(mockGhosts);
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(scaredTimer.timeout).toBeNull();
      expect(scaredTimer.ghosts).toEqual(mockGhosts);
    });
  });

  describe("start", () => {
    it("sets this.timeout to a setTimeout of the ghosts changing scared state with a five second delay", () => {
      jest.spyOn(global, "setTimeout");
      jest.spyOn(mockGhost, "changeScaredState");
      scaredTimer.start();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
      expect(scaredTimer.timeout).not.toBeNull();
      jest.runOnlyPendingTimers();
      expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(4);
    });
  });

  describe("clear", () => {
    it("calls clearTimeout on this.timeout", () => {
      jest.spyOn(global, "clearTimeout");
      scaredTimer.clear();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(clearTimeout).toHaveBeenCalledWith(scaredTimer.timeout);
    });
  });
});
