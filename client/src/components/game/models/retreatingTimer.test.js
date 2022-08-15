import RetreatingTimer from "./retreatingTimer";

jest.useFakeTimers();

let mockGhost;
let retreatingTimer;

describe("RetreatingTimer", () => {
  beforeEach(() => {
    mockGhost = {
      isRetreating: true,
      changeRetreatingState: () => undefined,
    };
    retreatingTimer = new RetreatingTimer(mockGhost);
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(retreatingTimer.timeout).toBeNull();
      expect(retreatingTimer.ghost).toEqual(mockGhost);
    });
  });

  describe("start", () => {
    it("sets the timeout to call changeRetreatingState after a delay of three seconds", () => {
      jest.spyOn(global, "setTimeout");
      jest.spyOn(mockGhost, "changeRetreatingState");
      retreatingTimer.start();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
      expect(retreatingTimer.timeout).not.toBeNull();
      jest.runOnlyPendingTimers();
      expect(mockGhost.changeRetreatingState).toHaveBeenCalledTimes(1);
    });
  });
});
