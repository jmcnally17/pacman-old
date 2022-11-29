import updateDisplay from "./updateDisplay";

let mockvariables;
let mockDisplayLevel;
let mockDisplayScore;
let mockInfo;
let mockCtx;

describe("updateDisplay", () => {
  beforeEach(() => {
    mockvariables = "variables";
    mockDisplayLevel = jest.fn();
    mockDisplayScore = jest.fn();
    mockCtx = {
      clearRect: () => undefined,
    };
    mockInfo = {
      getContext: () => mockCtx,
      width: "500",
      height: "25",
    };
    jest.spyOn(document, "querySelector");
    jest.spyOn(mockInfo, "getContext");
    document.querySelector.mockReturnValue(mockInfo);
    mockInfo.getContext.mockReturnValue(mockCtx);
  });

  it("calls querySelector on the document to find the game info canvas element", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(document.querySelector).toHaveBeenCalledTimes(1);
    expect(document.querySelector).toHaveBeenCalledWith("#info");
  });

  it("calls getContext of the game info object to get ctx", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockInfo.getContext).toHaveBeenCalledTimes(1);
    expect(mockInfo.getContext).toHaveBeenCalledWith("2d");
  });

  it("calls clearRect on the game info", () => {
    jest.spyOn(mockCtx, "clearRect");
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockCtx.clearRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.clearRect).toHaveBeenCalledWith(
      0,
      0,
      mockInfo.width,
      mockInfo.height
    );
  });

  it("calls displayLevel to show the player's current level", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockDisplayLevel).toHaveBeenCalledTimes(1);
    expect(mockDisplayLevel).toHaveBeenCalledWith(mockCtx, mockvariables);
  });

  it("calls displayScore to show the player's score", () => {
    updateDisplay(mockvariables, mockDisplayLevel, mockDisplayScore);
    expect(mockDisplayScore).toHaveBeenCalledTimes(1);
    expect(mockDisplayScore).toHaveBeenCalledWith(mockCtx, mockvariables);
  });
});
