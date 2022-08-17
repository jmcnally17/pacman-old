import chooseMovement from "./chooseMovement";

let mockPacman;
let mockCollisions;
let mockVariables;
let mockRedGhost;
let mockhuntAndScatter;
let mockMoveRandomly;

describe("chooseMovement", () => {
  beforeEach(() => {
    mockPacman = "pacman";
    mockCollisions = "collisions";
    mockVariables = "variables";
    mockRedGhost = "redGhost";
    mockhuntAndScatter = jest.fn();
    mockMoveRandomly = jest.fn();
  });

  it("calls huntAndScatter if the ghost is not scared or retreating", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: false,
    };
    chooseMovement(
      mockGhost,
      mockPacman,
      mockCollisions,
      mockVariables,
      mockRedGhost,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockhuntAndScatter).toHaveBeenCalledTimes(1);
    expect(mockhuntAndScatter).toHaveBeenCalledWith(
      mockGhost,
      mockPacman,
      mockCollisions,
      mockVariables,
      mockRedGhost
    );
  });

  it("calls randomDirection if the ghost is scared", () => {
    const mockGhost = {
      isScared: true,
    };
    chooseMovement(
      mockGhost,
      mockPacman,
      mockCollisions,
      mockVariables,
      mockRedGhost,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
    expect(mockMoveRandomly).toHaveBeenCalledWith(mockGhost, mockCollisions);
  });

  it("calls randomDirection if the ghost is retreating", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: true,
    };
    chooseMovement(
      mockGhost,
      mockPacman,
      mockCollisions,
      mockVariables,
      mockRedGhost,
      mockhuntAndScatter,
      mockMoveRandomly
    );
    expect(mockMoveRandomly).toHaveBeenCalledTimes(1);
    expect(mockMoveRandomly).toHaveBeenCalledWith(mockGhost, mockCollisions);
  });
});
