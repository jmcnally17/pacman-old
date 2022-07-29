import chooseMovement from "./chooseMovement";

let mockObject;
let mockHuntPacman;
let mockMoveRandomly;

describe("chooseMovement", () => {
  beforeEach(() => {
    mockHuntPacman = jest.fn();
    mockMoveRandomly = jest.fn();
  });

  it("calls huntPacman if the ghost is red and is not scared", () => {
    const mockRedGhost = {
      colour: "red",
      isScared: false,
    };
    chooseMovement(
      mockRedGhost,
      mockObject,
      mockObject,
      mockObject,
      mockHuntPacman,
      mockMoveRandomly
    );
    expect(mockHuntPacman).toHaveBeenCalledTimes(1);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(0);
  });

  it("calls randomDirection if the ghost is red but is scared", () => {
    const mockRedGhost = {
      colour: "red",
      isScared: true,
    };
    chooseMovement(
      mockRedGhost,
      mockObject,
      mockObject,
      mockObject,
      mockHuntPacman,
      mockMoveRandomly
    );
    expect(mockHuntPacman).toHaveBeenCalledTimes(0);
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
  });

  it("calls randomMovement if the ghost is not red", () => {
    const mockCyanGhost = {
      colour: "cyan",
    };
    chooseMovement(
      mockCyanGhost,
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
