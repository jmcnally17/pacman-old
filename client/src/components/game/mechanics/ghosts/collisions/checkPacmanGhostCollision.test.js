import checkPacmanGhostCollision from "./checkPacmanGhostCollision";

let mockObject;
let mockDealWithCollision;

describe("checkPacmanGhostCollision", () => {
  beforeEach(() => {
    mockDealWithCollision = jest.fn();
  });

  it("call dealWithCollision when the collisionConditional is true", () => {
    const mockCollisionConditional = jest.fn().mockReturnValue(true);
    checkPacmanGhostCollision(
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockCollisionConditional).toHaveBeenCalledTimes(1);
    expect(mockDealWithCollision).toHaveBeenCalledTimes(1);
  });

  it("does not call dealWithCollision when the collisionConditional is false", () => {
    const mockCollisionConditional = jest.fn().mockReturnValue(false);
    checkPacmanGhostCollision(
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockCollisionConditional,
      mockDealWithCollision
    );
    expect(mockCollisionConditional).toHaveBeenCalledTimes(1);
    expect(mockDealWithCollision).toHaveBeenCalledTimes(0);
  });
});
