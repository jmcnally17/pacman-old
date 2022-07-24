import implementPellets from "./implementPellets";

let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPellet;
let mockEatenPellets;
let mockCtx;
let mockPacman;
let mockScore;
let mockLastKeyPressed;
let mockGhosts;
let mockPowerUps;
let mockLevel;
let uneatenDrawSpy;
let eatenDrawSpy;
let mockEatPellet;
let mockCheckLevelUpCondition;

describe("implementPellets", () => {
  beforeEach(() => {
    mockUneatenPellet = {
      hasBeenEaten: false,
      draw: () => undefined,
    };
    mockUneatenPellets = [
      mockUneatenPellet,
      mockUneatenPellet,
      mockUneatenPellet,
    ];
    mockEatenPellet = {
      hasBeenEaten: true,
      draw: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet];
    mockCtx = {};
    mockPacman = {};
    mockScore = {};
    mockLastKeyPressed = {};
    mockGhosts = [];
    mockPowerUps = [];
    mockLevel = {};
    uneatenDrawSpy = jest.spyOn(mockUneatenPellet, "draw");
    eatenDrawSpy = jest.spyOn(mockEatenPellet, "draw");
    mockEatPellet = jest.fn();
    mockCheckLevelUpCondition = jest.fn();
  });
  it("calls the necessary funcions to implement the pellet functionality", () => {
    implementPellets(
      mockUneatenPellets,
      mockCtx,
      mockPacman,
      mockScore,
      mockLastKeyPressed,
      mockGhosts,
      mockPowerUps,
      mockLevel,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(uneatenDrawSpy).toHaveBeenCalledTimes(3);
    expect(mockEatPellet).toHaveBeenCalledTimes(3);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
  });

  it("does not draw the pellets if they have been eaten", () => {
    implementPellets(
      mockEatenPellets,
      mockCtx,
      mockPacman,
      mockScore,
      mockLastKeyPressed,
      mockGhosts,
      mockPowerUps,
      mockLevel,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(eatenDrawSpy).toHaveBeenCalledTimes(0);
    expect(mockEatPellet).toHaveBeenCalledTimes(2);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
  });
});
