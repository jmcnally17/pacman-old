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

  it("calls drawPacmanIcon for the first icon when the player has at least one life left", () => {
    displayLives(mockCtx, mockVariables, mockDrawPacmanIcon);
    expect(mockDrawPacmanIcon).toHaveBeenCalledTimes(2);
    expect(mockDrawPacmanIcon).toHaveBeenCalledWith(mockCtx, {
      x: 580,
      y: 15,
    });
  });

  it("calls drawPacmanIcon for the second icon when the player has two lives left", () => {
    displayLives(mockCtx, mockVariables, mockDrawPacmanIcon);
    expect(mockDrawPacmanIcon).toHaveBeenCalledTimes(2);
    expect(mockDrawPacmanIcon).toHaveBeenCalledWith(mockCtx, {
      x: 540,
      y: 15,
    });
  });
});
