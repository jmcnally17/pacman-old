import ScaredTimer from "./scaredTimer";

jest.useFakeTimers();

describe("ScaredTimer", () => {
  describe("resume", () => {
    it("starts the timeout again to not change the ghosts scared state if they are not scared and resume the cycleTimer", () => {
      const mockGhost = {
        isScared: false,
        changeScaredState: () => undefined,
      };
      const mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
      const scaredTimer = new ScaredTimer(mockGhosts);
      const mockCycleTimer = {
        resume: () => undefined,
      };
      jest.spyOn(global, "setTimeout");
      jest.spyOn(mockGhost, "changeScaredState");
      jest.spyOn(mockCycleTimer, "resume");
      scaredTimer.timeRemaining = 4160;
      scaredTimer.isRunning = true;
      scaredTimer.resume(mockCycleTimer);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4160);
      expect(scaredTimer.timeout).not.toBeNull();
      jest.runOnlyPendingTimers();
      expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(0);
      expect(mockCycleTimer.resume).toHaveBeenCalledTimes(1);
      expect(scaredTimer.isRunning).toBeFalsy();
    });
  });
});