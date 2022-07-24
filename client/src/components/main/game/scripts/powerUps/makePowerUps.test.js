import makePowerUps from "./makePowerUps";

let mockLength;

describe("makePowerUps", () => {
  beforeEach(() => {
    mockLength = 20;
  });

  it("returns an empty array for a map containing no power ups", () => {
    const mockMap = [
      ["1", "-"],
      ["4", "3", "|"],
    ];
    expect(makePowerUps(mockMap, mockLength)).toEqual([]);
  });

  it("returns the appropriate number of power up objects in an array", () => {
    const mockMap = [
      ["1", "o"],
      ["4", "3", "o"],
      ["o", "o", "-"],
    ];
    expect(makePowerUps(mockMap, mockLength).length).toBe(4);
  });
});
