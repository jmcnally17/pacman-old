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

  it("calls ghostAttack if the ghost is not scared and does not increase the score", () => {
    const mockGhost = {
      isScared: false,
      reset: () => undefined,
    };
    const ghostSpy = jest.spyOn(mockGhost, "reset");
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
    expect(ghostSpy).toHaveBeenCalledTimes(0);
  });

  it("increases the score and killCount and calls reset on the ghost if the ghost is scared", () => {
    const mockGhost = {
      isScared: true,
      reset: () => undefined,
    };
    const ghostSpy = jest.spyOn(mockGhost, "reset");
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
    expect(ghostSpy).toHaveBeenCalledTimes(1);
  });
});
