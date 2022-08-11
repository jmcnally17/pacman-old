import cycleTimer from "./cycleTimer";

describe("Timer", () => {
  describe("upon instanstation", () => {
    it("has a number of instance variables", () => {
      const timer = new cycleTimer();
      expect(timer.timeout).toBeNull();
      expect(timer.count).toBe(0);
    });
  });
});
