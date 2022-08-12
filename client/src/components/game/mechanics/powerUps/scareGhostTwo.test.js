import scareGhost from "./scareGhost";

describe("scareGhost", () => {
  it("does not call changeScaredState if the ghost is scared and just clears and sets the timeout", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "clearTimeout");
    jest.spyOn(global, "setTimeout");
    const mockScaredGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: null,
    };
    jest.spyOn(mockScaredGhost, "changeScaredState");
    scareGhost(mockScaredGhost);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.scaredTimeout).not.toBeNull();
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(0);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(1);
  });
});
