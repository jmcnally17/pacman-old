import makeTunnelBoundaries from "./makeTunnelBoundaries";

describe("makeBoundaries", () => {
  it("adds the four tunnel boundaries to the boundaries array", () => {
    const mockBoundaries = [];
    makeTunnelBoundaries(mockBoundaries);
    expect(mockBoundaries.length).toBe(4);
  });
});
