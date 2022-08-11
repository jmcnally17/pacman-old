import makePowerUps from "./makePowerUps";

let mockVariables;

describe("makePowerUps", () => {
  beforeEach(() => {
    mockVariables = {
      length: 32,
    };
  });

  it("returns an empty array for a map containing no power ups", () => {
    const mockMap = [
      ["1", "-"],
      ["4", "3", "|"],
    ];
    expect(makePowerUps(mockMap, mockVariables)).toEqual([]);
  });

  it("returns the appropriate number of power up objects in an array", () => {
    const mockMap = [
      ["1", "o"],
      ["4", "3", "o"],
      ["o", "o", "-"],
    ];
    expect(makePowerUps(mockMap, mockVariables).length).toBe(4);
  });
});
