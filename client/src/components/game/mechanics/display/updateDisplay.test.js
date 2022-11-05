import updateDisplay from "./updateDisplay";

let mockvariables;
let mockDisplayLevel;
let mockDisplayScore;

describe("updateDisplay", () => {
  beforeEach(() => {
    mockvariables = "variables";
    mockDisplayLevel = jest.fn();
    mockDisplayScore = jest.fn();
  });

  it("calls displayLevel to show the player's current level", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockDisplayLevel).toHaveBeenCalledTimes(1);
    expect(mockDisplayLevel).toHaveBeenCalledWith(mockvariables);
  });

  it("calls displayScore to show the player's score", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockDisplayScore).toHaveBeenCalledTimes(1);
    expect(mockDisplayScore).toHaveBeenCalledWith(mockvariables);
  });
});
