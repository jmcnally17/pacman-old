import CycleTimer from "./cycleTimer";

jest.useFakeTimers();

describe("CycleTimer", () => {
  describe("start", () => {
    it("calls setTimeout with a time of twenty seconds when the count is 1 and takes 1 from the count", () => {
      const mockGhost = {
        changeHuntingState: () => true,
      };
      const mockGhosts = [mockGhost, mockGhost];
      jest.spyOn(mockGhost, "changeHuntingState");
      const cycleTimer = new CycleTimer(mockGhosts);
      jest.spyOn(global, "setTimeout");
      cycleTimer.count = 1;
      cycleTimer.start();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 20000);
      expect(cycleTimer.timeout).not.toBeNull();
      expect(cycleTimer.count).toBe(0);
      expect(cycleTimer.isRunning).toBeTruthy();

      jest.runOnlyPendingTimers();
      expect(mockGhost.changeHuntingState).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 7000);
    });
  });
});
