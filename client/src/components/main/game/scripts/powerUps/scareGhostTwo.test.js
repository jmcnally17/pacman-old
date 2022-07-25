import scareGhost from "./scareGhost";

describe("scareGhost", () => {
  it("does not call changeScaredState if the ghost is scared and just sets the timeout", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    const mockScaredGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: null,
    };
    const changeStateSpy = jest.spyOn(mockScaredGhost, "changeScaredState");
    scareGhost(mockScaredGhost);
    expect(mockScaredGhost.scaredTimeout).not.toBeNull();
    expect(changeStateSpy).toHaveBeenCalledTimes(0);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(changeStateSpy).toHaveBeenCalledTimes(1);
  });
});
