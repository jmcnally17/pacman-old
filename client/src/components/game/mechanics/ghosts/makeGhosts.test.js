import makeGhosts from "./makeGhosts";

describe("makeGhosts", () => {
  it("returns an array containing the four ghosts", () => {
    expect(makeGhosts(20).length).toBe(4);
  });
});
