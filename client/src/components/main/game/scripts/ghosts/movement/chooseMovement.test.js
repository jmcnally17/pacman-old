import chooseMovement from "./chooseMovement";

let mockObject;
let mockHuntPacman;
let mockMoveRandomly;

describe("chooseMovement", () => {
  beforeEach(() => {
    mockHuntPacman = jest.fn();
    mockMoveRandomly = jest.fn();
  });

  it("calls huntPacman if the ghost is not scared", () => {
    const mockGhost = {
      isScared: false,
    };
    chooseMovement(
      mockGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockHuntPacman,
      mockMoveRandomly
    );
    expect(mockHuntPacman).toHaveBeenCalledTimes(1);
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
      mockHuntPacman,
      mockMoveRandomly
    );
    expect(mockHuntPacman).toHaveBeenCalledTimes(0);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
  });
});
