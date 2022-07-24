import scareGhost from "./scareGhost";

describe("scareGhost", () => {
  it("calls changeScaredState on the ghost and sets a timeout to call again", () => {
    const mockGhost = {
      changeScaredState: () => undefined,
      scaredTimeout: undefined,
    };
    const changeStateSpy = jest.spyOn(mockGhost, "changeScaredState");
    scareGhost(mockGhost);
    expect(changeStateSpy).toHaveBeenCalledTimes(1);
    expect(mockGhost.scaredTimeout).not.toBe(undefined);
  });
});
