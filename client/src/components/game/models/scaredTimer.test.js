import ScaredTimer from "./scaredTimer";

describe("ScaredTimer", () => {
  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      const mockGhost = {};
      const mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
      const scaredTimer = new ScaredTimer(mockGhosts);
      expect(scaredTimer.timeout).toBeNull();
      expect(scaredTimer.ghosts).toEqual(mockGhosts);
    });
  });
});
