import ghostAttack from "./ghostAttack";

let mockObject;
let mockEndGame;
let mockResetAfterDeath;

describe("ghostAttack", () => {
  beforeEach(() => {
    mockEndGame = jest.fn();
    mockResetAfterDeath = jest.fn();
  });

  it("calls endGame when Pac-Man has no lives left", () => {
    const mockPacman = {
      lives: 0,
      loseLife: () => undefined,
    };
    const pacmanSpy = jest.spyOn(mockPacman, "loseLife");
    ghostAttack(
      mockPacman,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(1);
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(0);
    expect(pacmanSpy).toHaveBeenCalledTimes(0);
  });

  it("calls resetAfterDeath and loseLife when Pac-Man has lives left", () => {
    const mockPacman = {
      lives: 2,
      loseLife: () => undefined,
    };
    const pacmanSpy = jest.spyOn(mockPacman, "loseLife");
    ghostAttack(
      mockPacman,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(0);
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(1);
    expect(pacmanSpy).toHaveBeenCalledTimes(1);
  });
});
