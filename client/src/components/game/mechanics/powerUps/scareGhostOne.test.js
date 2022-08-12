import scareGhost from "./scareGhost";

jest.useFakeTimers();

describe("scareGhost", () => {
  it("calls changeScaredState if the ghost is not scared and clears and sets a timeout to call it again", () => {
    const mockDeleteScaredTimeout = jest.fn();
    jest.spyOn(global, "setTimeout");
    const mockGhost = {
      isScared: false,
      changeScaredState: () => undefined,
      scaredTimeout: null,
    };
    jest.spyOn(mockGhost, "changeScaredState");
    scareGhost(mockGhost, mockDeleteScaredTimeout);
    expect(mockDeleteScaredTimeout).toHaveBeenCalledTimes(1);
    expect(mockGhost.scaredTimeout).not.toBeNull();
    expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
    jest.runOnlyPendingTimers();
    expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(2);
  });
});
