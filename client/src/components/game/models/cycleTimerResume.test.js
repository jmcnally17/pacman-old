import CycleTimer from "./cycleTimer";

jest.useFakeTimers();

describe("CycleTimer", () => {
  describe("resume", () => {
    it("calls setTimeout with the timeRemaining as the delay", () => {
      const timer = new CycleTimer();
      const mockGhost = {
        changeHuntingState: () => true,
      };
      const mockGhosts = [mockGhost, mockGhost];
      const huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
      jest.spyOn(global, "setTimeout");
      timer.timeRemaining = 4820;
      timer.resume(mockGhosts);

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4820);
      expect(timer.timeout).not.toBeNull();

      jest.runOnlyPendingTimers();
      expect(huntingSpy).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
    });
  });
});
