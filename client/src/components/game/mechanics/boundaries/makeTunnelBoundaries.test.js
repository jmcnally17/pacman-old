import makeTunnelBoundaries from "./makeTunnelBoundaries";

describe("makeBoundaries", () => {
  it("adds the four tunnel boundaries to the boundaries array", () => {
    const mockBoundaries = [];
    const mockVariables = {
      tileLength: 32,
    };
    makeTunnelBoundaries(mockBoundaries, mockVariables);
    expect(mockBoundaries.length).toBe(4);
  });
});
