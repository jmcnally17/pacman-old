import dealWithCollision from "./dealWithCollision";

jest.useFakeTimers();

let mockPacman;
let mockVariables;
let mockGhosts;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockGhostAttack;

describe("dealWithCollision", () => {
  beforeEach(() => {
    mockPacman = "pacman";
    mockVariables = {
      score: 100,
      killCount: 2,
    };
    mockGhosts = "ghosts";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockGhostAttack = jest.fn();
  });

  it("calls ghostAttack if the ghost is not scared and is not retreating and does not increase the score", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: false,
      reset: () => undefined,
    };
    dealWithCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(1);
    expect(mockGhostAttack).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer
    );
    expect(mockVariables.score).toBe(100);
    expect(mockVariables.killCount).toBe(2);
  });

  it("increases the score and killCount and sends the ghost into retreating mode if the ghost is scared and is not retreating", () => {
    const mockGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: undefined,
      isRetreating: false,
      changeRetreatingState: () => undefined,
      retreatingTimeout: null,
    };
    jest.spyOn(mockGhost, "changeRetreatingState");
    jest.spyOn(global, "setTimeout");
    jest.spyOn(mockGhost, "changeScaredState");
    jest.spyOn(global, "clearTimeout");
    dealWithCollision(
      mockGhost,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(900);
    expect(mockVariables.killCount).toBe(3);
    expect(mockGhost.changeRetreatingState).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
    expect(mockGhost.retreatingTimeout).not.toBeNull();
    expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenCalledWith(mockGhost.scaredTimeout);
    jest.runOnlyPendingTimers();
    expect(mockGhost.changeRetreatingState).toHaveBeenCalledTimes(2);
  });
});
