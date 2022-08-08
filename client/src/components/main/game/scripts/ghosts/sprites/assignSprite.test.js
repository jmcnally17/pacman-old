import assignSprite from "./assignSprite";

let mockAssignScaredSprite;
let mockAssignRetreatingSprite;
let mockAssignRegularSprite;

describe("assignSprite", () => {
  beforeEach(() => {
    mockAssignScaredSprite = jest.fn();
    mockAssignRetreatingSprite = jest.fn();
    mockAssignRegularSprite = jest.fn();
  });

  it("calls assignScaredSprite if the ghost is scared", () => {
    const mockGhost = {
      isScared: true,
      isRetreating: false,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRetreatingSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(1);
    expect(mockAssignRetreatingSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(0);
  });

  it("calls assignRetreatingSprite if the ghost is retreating", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: true,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRetreatingSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRetreatingSprite).toHaveBeenCalledTimes(1);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(0);
  });

  it("calls assignRegularSprite if the ghost is not scared or retreating", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: false,
    };
    assignSprite(
      mockGhost,
      mockAssignScaredSprite,
      mockAssignRetreatingSprite,
      mockAssignRegularSprite
    );
    expect(mockAssignScaredSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRetreatingSprite).toHaveBeenCalledTimes(0);
    expect(mockAssignRegularSprite).toHaveBeenCalledTimes(1);
  });
});
