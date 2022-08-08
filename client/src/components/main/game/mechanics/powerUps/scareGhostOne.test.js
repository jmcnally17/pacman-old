import scareGhost from "./scareGhost";

describe("scareGhost", () => {
  it("calls changeScaredState if the ghost is not scared and clears and sets a timeout to call it again", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "clearTimeout");
    jest.spyOn(global, "setTimeout");
    const mockGhost = {
      isScared: false,
      changeScaredState: () => undefined,
      scaredTimeout: null,
    };
    const changeStateSpy = jest.spyOn(mockGhost, "changeScaredState");
    scareGhost(mockGhost);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(mockGhost.scaredTimeout).not.toBeNull();
    expect(changeStateSpy).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(changeStateSpy).toHaveBeenCalledTimes(2);
  });
});
