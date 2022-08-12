import CycleTimer from "./cycleTimer";

let timer;
let mockGhost;
let mockGhosts;
let huntingSpy;
jest.useFakeTimers();

describe("CycleTimer", () => {
  beforeEach(() => {
    timer = new CycleTimer();
    mockGhost = {
      changeHuntingState: () => true,
    };
    mockGhosts = [mockGhost, mockGhost];
    huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
  });

  describe("upon instanstation", () => {
    it("has a number of instance variables", () => {
      expect(timer.timeout).toBeNull();
      expect(timer.count).toBe(0);
      expect(timer.startTime).toBeNull();
      expect(timer.timeRemaining).toBeNull();
    });
  });

  describe("start", () => {
    it("begins the timeout with a delay of seven seconds if the count is equal to 1", () => {
      const mockDateNow = 16940;
      jest.spyOn(global, "setTimeout");
      timer.start(mockGhosts, mockDateNow);

      expect(timer.startTime).toBe(16940);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 7000);
      expect(timer.timeout).not.toBeNull();
      expect(timer.count).toBe(1);

      jest.runOnlyPendingTimers();
      expect(huntingSpy).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
    });
  });

  describe("pause", () => {
    it("calls clearTimeout and saves the time remaining in this.timeRemaining", () => {
      jest.spyOn(global, "clearTimeout");
      const mockDateNow = 5780;
      timer.startTime = 2460;
      timer.pause(mockDateNow);
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(timer.timeRemaining).toBe(3320);
    });
  });

  describe("reset", () => {
    it("clears the timeout and sets the count back to 0", () => {
      jest.spyOn(global, "clearTimeout");
      timer.count = 1;
      timer.reset();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(timer.count).toBe(0);
    });
  });
});
