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
    };
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
      mockObject,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(1);
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(0);
  });

  it("calls resetAfterDeath and decreases Pac-Man's lives by 1 when he has lives left", () => {
    const mockPacman = {
      lives: 2,
    };
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
      mockObject,
      mockEndGame,
      mockResetAfterDeath
    );
    expect(mockEndGame).toHaveBeenCalledTimes(0);
    expect(mockResetAfterDeath).toHaveBeenCalledTimes(1);
    expect(mockPacman.lives).toBe(1);
  });
});
