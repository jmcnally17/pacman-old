import clearScaredTimeout from "./clearScaredTimeout";

describe("clearScaredTimeout", () => {
  it("clears the ghosts scared timeout", () => {
    const mockGhost = {
      scaredTimeout: undefined,
    };
    jest.spyOn(global, "clearTimeout");
    clearScaredTimeout(mockGhost);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenCalledWith(mockGhost.scaredTimeout);
  });
});
