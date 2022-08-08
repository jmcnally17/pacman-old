import makePellets from "./makePellets";

describe("makePellets", () => {
  it("returns an array of the four tunnel boundaries for an empty map", () => {
    expect(makePellets([[]], 20).length).toBe(0);
  });

  it("returns an array of appropriate boundary objects for each type of boundary as well as the tunnel boundaries", () => {
    expect(
      makePellets(
        [
          ["-", "|"],
          [".", "2", ".", "4"],
          [".", " "],
        ],
        20
      ).length
    ).toBe(3);
  });
});
