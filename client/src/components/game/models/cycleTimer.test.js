import CycleTimer from "./cycleTimer";

jest.useFakeTimers();

let timer;
let mockGhost;
let mockGhosts;

describe("CycleTimer", () => {
  beforeEach(() => {
    mockGhost = {
      changeHuntingState: () => true,
    };
    mockGhosts = [mockGhost, mockGhost];
    jest.spyOn(mockGhost, "changeHuntingState");
    timer = new CycleTimer(mockGhosts);
  });

  describe("upon instanstation", () => {
    it("has a number of instance variables", () => {
      expect(timer.timeout).toBeNull();
      expect(timer.count).toBe(0);
      expect(timer.startTime).toBeNull();
      expect(timer.timeRemaining).toBeNull();
      expect(timer.ghosts).toEqual(mockGhosts);
    });
  });

  describe("start", () => {
    it("begins the timeout with a delay of seven seconds if the count is equal to 1", () => {
      const mockDateNow = 16940;
      jest.spyOn(global, "setTimeout");
      timer.start(mockDateNow);

      expect(timer.startTime).toBe(16940);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 7000);
      expect(timer.timeout).not.toBeNull();
      expect(timer.count).toBe(1);

      jest.runOnlyPendingTimers();
      expect(mockGhost.changeHuntingState).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 20000);
    });
  });

  describe("pause", () => {
    it("calls clearTimeout and saves the time remaining in this.timeRemaining for the seven second delay", () => {
      jest.spyOn(global, "clearTimeout");
      timer.count = 1;
      const mockDateNow = 5780;
      timer.startTime = 2460;
      timer.pause(mockDateNow);
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(timer.timeRemaining).toBe(3680);
    });

    it("calls clearTimeout and saves the time remaining in this.timeRemaining for the twenty second delay", () => {
      jest.spyOn(global, "clearTimeout");
      const mockDateNow = 5780;
      timer.startTime = 2460;
      timer.pause(mockDateNow);
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(timer.timeRemaining).toBe(16680);
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
