import makePellets from "./makePellets";

let mockVariables;

describe("makePellets", () => {
  beforeEach(() => {
    mockVariables = {
      length: 32,
    };
  });

  it("returns an array of the four tunnel boundaries for an empty map", () => {
    expect(makePellets([[]], mockVariables).length).toBe(0);
  });

  it("returns an array of appropriate boundary objects for each type of boundary as well as the tunnel boundaries", () => {
    expect(
      makePellets(
        [
          ["-", "|"],
          [".", "2", ".", "4"],
          [".", " "],
        ],
        mockVariables
      ).length
    ).toBe(3);
  });
});
