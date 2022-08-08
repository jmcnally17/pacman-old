import chooseMovement from "./chooseMovement";

let mockObject;
let mockhuntAndScatter;
let mockMoveRandomly;

describe("chooseMovement", () => {
  beforeEach(() => {
    mockhuntAndScatter = jest.fn();
    mockMoveRandomly = jest.fn();
  });

  it("calls huntAndScatter if the ghost is not scared or recovering", () => {
    const mockGhost = {
      isScared: false,
      isRecovering: false,
    };
    chooseMovement(
      mockGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockhuntAndScatter).toHaveBeenCalledTimes(1);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(0);
  });

  it("calls randomDirection if the ghost is scared", () => {
    const mockGhost = {
      isScared: true,
    };
    chooseMovement(
      mockGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockhuntAndScatter).toHaveBeenCalledTimes(0);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
  });

  it("calls randomDirection if the ghost is recovering", () => {
    const mockGhost = {
      isScared: false,
      isRecovering: true,
    };
    chooseMovement(
      mockGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockhuntAndScatter).toHaveBeenCalledTimes(0);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
  });
});
