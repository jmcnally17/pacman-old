import makeBoundaries from "./makeBoundaries";

let mockMakeTunnelBoundaries;

describe("makeBoundaries", () => {
  beforeEach(() => {
    mockMakeTunnelBoundaries = jest.fn();
  });

  it("adds no boundaries to an empty array but always calls makeTunnelBoundaries", () => {
    expect(makeBoundaries([[]], 20, mockMakeTunnelBoundaries).length).toBe(0);
    expect(mockMakeTunnelBoundaries).toHaveBeenCalledTimes(1);
  });

  it("returns an array of appropriate boundary objects for each type of boundary as well as the tunnel boundaries", () => {
    expect(
      makeBoundaries(
        [
          ["-", "|"],
          ["1", "2", "3", "4"],
          [".", " "],
        ],
        20,
        mockMakeTunnelBoundaries
      ).length
    ).toBe(6);
    expect(mockMakeTunnelBoundaries).toHaveBeenCalledTimes(1);
  });
});
