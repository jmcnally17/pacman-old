import scareGhost from "./scareGhost";

describe("scareGhost", () => {
  it("calls changeScaredState on the ghost and sets a timeout to call again", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    const mockGhost = {
      changeScaredState: () => undefined,
      scaredTimeout: undefined,
    };
    const changeStateSpy = jest.spyOn(mockGhost, "changeScaredState");
    scareGhost(mockGhost);
    expect(changeStateSpy).toHaveBeenCalledTimes(1);
    expect(mockGhost.scaredTimeout).not.toBe(undefined);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(changeStateSpy).toHaveBeenCalledTimes(2);
  });
});
