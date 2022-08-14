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
      const cycleTimer = new CycleTimer(mockGhosts);
      jest.spyOn(global, "setTimeout");
      cycleTimer.timeRemaining = 4820;
      cycleTimer.resume();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4820);
      expect(cycleTimer.timeout).not.toBeNull();

      jest.runOnlyPendingTimers();
      expect(mockGhost.changeHuntingState).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 7000);
    });
  });
});
