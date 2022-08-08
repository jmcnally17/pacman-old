import assignSprite from "./assignSprite";

let mockAssignScaredSprite;
let mockAssignRecoveringSprite;
let mockAssignRegularSprite;

describe("assignSprite", () => {
  beforeEach(() => {
    mockAssignScaredSprite = jest.fn();
    mockAssignRecoveringSprite = jest.fn();
    mockAssignRegularSprite = jest.fn();
  });

  it("calls assignScaredSprite if the ghost is scared", () => {
    const mockGhost = {
      isScared: true,
      isRecovering: false,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRecoveringSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(1);
    expect(mockAssignRecoveringSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(0);
  });

  it("calls assignRecoveringSprite if the ghost is recovering", () => {
    const mockGhost = {
      isScared: false,
      isRecovering: true,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRecoveringSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRecoveringSprite).toHaveBeenCalledTimes(1);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(0);
  });

  it("calls assignRegularSprite if the ghost is not scared or recovering", () => {
    const mockGhost = {
      isScared: false,
      isRecovering: false,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRecoveringSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRecoveringSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(1);
  });
});
