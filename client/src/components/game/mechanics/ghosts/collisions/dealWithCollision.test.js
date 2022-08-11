import dealWithCollision from "./dealWithCollision";

let mockObject;
let mockScore;
let mockKillCount;
let mockGhostAttack;

describe("dealWithCollision", () => {
  beforeEach(() => {
    mockScore = {
      points: 100,
    };
    mockKillCount = {
      number: 2,
    };
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
      mockObject,
      mockObject,
      mockScore,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockKillCount,
      mockObject,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(1);
    expect(mockScore.points).toBe(100);
    expect(mockKillCount.number).toBe(2);
  });

  it("increases the score and killCount and sends the ghost into retreating mode if the ghost is scared and is not retreating", () => {
    jest.useFakeTimers();
    const mockGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: undefined,
      isRetreating: false,
      changeRetreatingState: () => undefined,
      retreatingTimeout: null,
    };
    const ghostRetreatingSpy = jest.spyOn(mockGhost, "changeRetreatingState");
    const timeoutSpy = jest.spyOn(global, "setTimeout");
    const ghostScaredSpy = jest.spyOn(mockGhost, "changeScaredState");
    const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");
    dealWithCollision(
      mockGhost,
      mockObject,
      mockObject,
      mockScore,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockKillCount,
      mockObject,
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(900);
    expect(mockKillCount.number).toBe(3);
    expect(ghostRetreatingSpy).toHaveBeenCalledTimes(1);
    expect(timeoutSpy).toHaveBeenCalledTimes(1);
    expect(mockGhost.retreatingTimeout).not.toBeNull();
    expect(ghostScaredSpy).toHaveBeenCalledTimes(1);
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(ghostRetreatingSpy).toHaveBeenCalledTimes(2);
  });
});
