import makeBoundaries from "./makeBoundaries";

describe("makeBoundaries", () => {
  it("returns an array of the four tunnel boundaries for an empty map", () => {
    expect(makeBoundaries([[]], 20).length).toBe(4);
  });

  it("returns an array of appropriate boundary objects for each type of boundary as well as the tunnel boundaries", () => {
    expect(
      makeBoundaries(
        [
          ["-", "|"],
          ["1", "2", "3", "4"],
          [".", " "],
        ],
        20
      ).length
    ).toBe(10);
  });
});
