import displayLives from "./displayLives";

let mockCtx;
let mockVariables;
let mockDrawPacmanIcon;

describe("displayLives", () => {
  beforeEach(() => {
    mockCtx = "ctx";
    mockVariables = "variables";
    mockDrawPacmanIcon = jest.fn();
  });

  it("calls drawPacmanIcon", () => {
    displayLives(mockCtx, mockVariables, mockDrawPacmanIcon);
    expect(mockDrawPacmanIcon).toHaveBeenCalledTimes(1);
    expect(mockDrawPacmanIcon).toHaveBeenCalledWith(mockCtx);
  });
});
