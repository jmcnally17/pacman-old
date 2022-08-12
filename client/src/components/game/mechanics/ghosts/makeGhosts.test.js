import makeGhosts from "./makeGhosts";

describe("makeGhosts", () => {
  it("returns an array containing the four ghosts", () => {
    const mockVariables = {
      tileLength: 32,
    };
    expect(makeGhosts(mockVariables).length).toBe(4);
  });
});
