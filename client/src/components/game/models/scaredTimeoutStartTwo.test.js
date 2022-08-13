import ScaredTimer from "./scaredTimer";

jest.useFakeTimers();

describe("ScaredTimer", () => {
  describe("start", () => {
    it("does not call changeScaredState in the timeout if the ghosts are not scared", () => {
      const mockGhost = {
        isScared: false,
        changeScaredState: () => undefined,
      };
      const mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
      const scaredTimer = new ScaredTimer(mockGhosts);
      jest.spyOn(global, "setTimeout");
      jest.spyOn(mockGhost, "changeScaredState");
      scaredTimer.start();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
      expect(scaredTimer.timeout).not.toBeNull();
      jest.runOnlyPendingTimers();
      expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(0);
    });
  });
});
