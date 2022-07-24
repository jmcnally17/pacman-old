import implementPowerUps from "./implementPowerUps";

let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockCtx;
let mockPacman;
let mockScore;
let mockGhosts;
let uneatenDrawSpy;
let eatenDrawSpy;
let mockEatPowerUp;

describe("implementPowerUps", () => {
  beforeEach(() => {
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      draw: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      draw: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    mockCtx = {};
    mockPacman = {};
    mockScore = {};
    mockGhosts = [];
    uneatenDrawSpy = jest.spyOn(mockUneatenPowerUp, "draw");
    eatenDrawSpy = jest.spyOn(mockEatenPowerUp, "draw");
    mockEatPowerUp = jest.fn();
  });
  it("calls the necessary funcions to implement the power up functionality", () => {
    implementPowerUps(
      mockUneatenPowerUps,
      mockCtx,
      mockPacman,
      mockScore,
      mockGhosts,
      mockEatPowerUp
    );
    expect(uneatenDrawSpy).toHaveBeenCalledTimes(3);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(3);
  });

  it("does not draw the power ups if they have been eaten", () => {
    implementPowerUps(
      mockEatenPowerUps,
      mockCtx,
      mockPacman,
      mockScore,
      mockGhosts,
      mockEatPowerUp
    );
    expect(eatenDrawSpy).toHaveBeenCalledTimes(0);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(2);
  });
});
