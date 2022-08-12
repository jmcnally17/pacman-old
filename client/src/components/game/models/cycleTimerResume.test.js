import CycleTimer from "./cycleTimer";

jest.useFakeTimers();

describe("CycleTimer", () => {
  describe("resume", () => {
    it("calls setTimeout with the timeRemaining as the delay", () => {
      const mockGhost = {
        changeHuntingState: () => true,
      };
      const mockGhosts = [mockGhost, mockGhost];
      jest.spyOn(mockGhost, "changeHuntingState");
      const timer = new CycleTimer(mockGhosts);
      jest.spyOn(global, "setTimeout");
      timer.timeRemaining = 4820;
      timer.resume();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4820);
      expect(timer.timeout).not.toBeNull();

      jest.runOnlyPendingTimers();
      expect(mockGhost.changeHuntingState).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
    });
  });
});
