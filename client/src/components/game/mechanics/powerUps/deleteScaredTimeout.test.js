import deleteScaredTimeout from "./deleteScaredTimeout";

describe("deleteScaredTimeout", () => {
  it("clears the ghosts scared timeout", () => {
    const mockGhost = {
      scaredTimeout: undefined,
    };
    jest.spyOn(global, "clearTimeout");
    deleteScaredTimeout(mockGhost);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenCalledWith(mockGhost.scaredTimeout);
  });
});
