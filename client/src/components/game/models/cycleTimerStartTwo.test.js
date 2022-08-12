import CycleTimer from "./cycleTimer";

jest.useFakeTimers();

describe("CycleTimer", () => {
  describe("start", () => {
    it("calls setTimeout with a time of twenty seconds when the count is 1 and takes 1 from the count", () => {
      const mockGhost = {
        changeHuntingState: () => true,
      };
      const mockGhosts = [mockGhost, mockGhost];
      const huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
      const timer = new CycleTimer(mockGhosts);
      jest.spyOn(global, "setTimeout");
      timer.count = 1;
      timer.start();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 20000);
      expect(timer.timeout).not.toBeNull();
      expect(timer.count).toBe(0);

      jest.runOnlyPendingTimers();
      expect(huntingSpy).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
    });
  });
});
