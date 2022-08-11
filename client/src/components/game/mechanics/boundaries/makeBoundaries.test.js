import makeBoundaries from "./makeBoundaries";

let mockVariables;
let mockMakeTunnelBoundaries;

describe("makeBoundaries", () => {
  beforeEach(() => {
    mockVariables = {
      length: 32,
    };
    mockMakeTunnelBoundaries = jest.fn();
  });

  it("adds no boundaries to an empty array but always calls makeTunnelBoundaries", () => {
    expect(
      makeBoundaries([[]], mockVariables, mockMakeTunnelBoundaries).length
    ).toBe(0);
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
        mockVariables,
        mockMakeTunnelBoundaries
      ).length
    ).toBe(6);
    expect(mockMakeTunnelBoundaries).toHaveBeenCalledTimes(1);
  });
});
