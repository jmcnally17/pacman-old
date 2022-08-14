import RetreatingTimer from "./retreatingTimer";

describe("RetreatingTimer", () => {
  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      const mockGhost = "ghost";
      const retreatingTimer = new RetreatingTimer(mockGhost);
      expect(retreatingTimer.timeout).toBeNull();
      expect(retreatingTimer.ghost).toEqual(mockGhost);
    });
  });
});
