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
    });
  });

  describe("start", () => {
    it("calls setTimeout with a time of seven seconds when the count is 0 and adds 1 to the count", () => {
      jest.spyOn(global, "setTimeout");
      timer.start(mockGhosts);

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 7000);
      expect(timer.timeout).not.toBeNull();
      expect(timer.count).toBe(1);

      jest.runOnlyPendingTimers();
      expect(huntingSpy).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
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
