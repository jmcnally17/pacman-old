import checkLevelUpCondition from "./checkLevelUpCondition";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockPacman;
let mockLastKeyPressed;
let mockGhosts;
let mockPowerUps;
let mockLevel;
let mockResetAfterLevelUp;

describe("checkLevelUpCondition", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockPacman = {};
    mockLastKeyPressed = {};
    mockGhosts = [];
    mockPowerUps = [];
    mockLevel = {
      number: 3,
    };
    mockResetAfterLevelUp = jest.fn();
  });

  it("runs the callback and increases the level by 1 if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockPacman,
      mockLastKeyPressed,
      mockGhosts,
      mockPowerUps,
      mockLevel,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(1);
    expect(mockLevel.number).toBe(4);
  });

  it("does not run the callback and leaves the level unchanged if the pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockPacman,
      mockLastKeyPressed,
      mockGhosts,
      mockPowerUps,
      mockLevel,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(0);
    expect(mockLevel.number).toBe(3);
  });
});
