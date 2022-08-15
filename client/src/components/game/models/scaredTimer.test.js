import ScaredTimer from "./scaredTimer";

jest.useFakeTimers();

let mockGhost;
let mockGhosts;
let scaredTimer;
let mockCycleTimer;

describe("ScaredTimer", () => {
  beforeEach(() => {
    mockGhost = {
      isScared: true,
      changeScaredState: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
    scaredTimer = new ScaredTimer(mockGhosts);
    mockCycleTimer = {
      resume: () => undefined,
    };
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(scaredTimer.timeout).toBeNull();
      expect(scaredTimer.ghosts).toEqual(mockGhosts);
    });
  });

  describe("start", () => {
    it("sets this.timeout to a setTimeout of the ghosts changing scared state with a five second delay if they are scared", () => {
      jest.spyOn(global, "setTimeout");
      jest.spyOn(mockGhost, "changeScaredState");
      jest.spyOn(mockCycleTimer, "resume");
      scaredTimer.start(mockCycleTimer);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
      expect(scaredTimer.timeout).not.toBeNull();
      jest.runOnlyPendingTimers();
      expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(4);
      expect(mockCycleTimer.resume).toHaveBeenCalledTimes(1);
    });
  });

  describe("reset", () => {
    it("calls clearTimeout on this.timeout", () => {
      jest.spyOn(global, "clearTimeout");
      scaredTimer.reset();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(clearTimeout).toHaveBeenCalledWith(scaredTimer.timeout);
    });
  });
});
