import makeGhosts from "./makeGhosts";

describe("makeGhosts", () => {
  it("returns an array containing the four ghosts", () => {
    expect(makeGhosts().length).toBe(4);
  });
});
