import scareGhost from "./scareGhost";

jest.useFakeTimers();

describe("scareGhost", () => {
  it("does not call changeScaredState if the ghost is scared and just clears and sets the timeout", () => {
    const mockClearScaredTimeout = jest.fn();
    jest.spyOn(global, "setTimeout");
    const mockScaredGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: null,
    };
    jest.spyOn(mockScaredGhost, "changeScaredState");
    scareGhost(mockScaredGhost, mockClearScaredTimeout);
    expect(mockClearScaredTimeout).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.scaredTimeout).not.toBeNull();
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(0);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
    jest.runOnlyPendingTimers();
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(1);
  });
});
