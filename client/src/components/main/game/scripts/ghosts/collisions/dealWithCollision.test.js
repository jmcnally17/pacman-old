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

  it("calls ghostAttack if the ghost is not scared and is not recovering and does not increase the score", () => {
    const mockGhost = {
      isScared: false,
      isRecovering: false,
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
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(1);
    expect(mockScore.points).toBe(100);
    expect(mockKillCount.number).toBe(2);
  });

  it("increases the score and killCount and sends the ghost into recovery mode if the ghost is scared and is not recovering", () => {
    jest.useFakeTimers();
    const mockGhost = {
      isScared: true,
      changeScaredState: () => undefined,
      scaredTimeout: undefined,
      isRecovering: false,
      changeRecoveringState: () => undefined,
      recoveringTimeout: null,
    };
    const ghostRecoveringSpy = jest.spyOn(mockGhost, "changeRecoveringState");
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
      mockGhostAttack
    );
    expect(mockGhostAttack).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(900);
    expect(mockKillCount.number).toBe(3);
    expect(ghostRecoveringSpy).toHaveBeenCalledTimes(1);
    expect(timeoutSpy).toHaveBeenCalledTimes(1);
    expect(mockGhost.recoveringTimeout).not.toBeNull();
    expect(ghostScaredSpy).toHaveBeenCalledTimes(1);
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(ghostRecoveringSpy).toHaveBeenCalledTimes(2);
  });
});
