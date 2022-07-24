import resetAfterGameOver from "./resetAfterGameOver";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockGhost;
let mockGhosts;
let mockPacman;
let mockLastKeyPressed;
let mockLevel;

describe("resetAfterGameOver", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      changeEatenState: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockGhost = {
      reset: () => undefined,
    };
    mockGhosts = [mockGhost, mockGhost];
    mockPacman = {
      reset: () => undefined,
      lives: 0,
    };
    mockLastKeyPressed = {
      key: "down",
    };
    mockLevel = {
      number: 5,
    };
  });

  it("resets the board to its original configuration after game over", () => {
    const eatenPelletSpy = jest.spyOn(mockEatenPellet, "changeEatenState");
    const eatenPowerUpSpy = jest.spyOn(mockEatenPowerUp, "changeEatenState");
    const ghostSpy = jest.spyOn(mockGhost, "reset");
    const pacmanSpy = jest.spyOn(mockPacman, "reset");
    resetAfterGameOver(
      mockEatenPellets,
      mockEatenPowerUps,
      mockGhosts,
      mockPacman,
      mockLastKeyPressed,
      mockLevel
    );
    expect(eatenPelletSpy).toHaveBeenCalledTimes(3);
    expect(eatenPowerUpSpy).toHaveBeenCalledTimes(2);
    expect(ghostSpy).toHaveBeenCalledTimes(2);
    expect(pacmanSpy).toHaveBeenCalledTimes(1);
    expect(mockPacman.lives).toBe(2);
    expect(mockLastKeyPressed.key).toBe("");
    expect(mockLevel.number).toBe(1);
  });

  it("does not call changeEatenState on the pellets and power ups if their conditionals are not met", () => {
    const uneatenPelletSpy = jest.spyOn(mockUneatenPellet, "changeEatenState");
    const uneatenPowerUpSpy = jest.spyOn(
      mockUneatenPowerUp,
      "changeEatenState"
    );
    resetAfterGameOver(
      mockUneatenPellets,
      mockUneatenPowerUps,
      mockGhosts,
      mockPacman,
      mockLastKeyPressed,
      mockLevel
    );
    expect(uneatenPelletSpy).toHaveBeenCalledTimes(0);
    expect(uneatenPowerUpSpy).toHaveBeenCalledTimes(0);
  });
});
