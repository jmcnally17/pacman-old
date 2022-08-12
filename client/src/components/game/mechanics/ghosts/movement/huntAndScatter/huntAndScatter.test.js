import huntAndScatter from "./huntAndScatter";

let mockGhost;
let mockPacman;
let collisions;
let mockVariables;
let mockRedGhost;
let mockCalculateDistance;
let mockpickDirection;
let mockEmptyPrevCollisions;

describe("huntAndScatter", () => {
  beforeEach(() => {
    mockGhost = {
      position: {
        x: 190,
        y: 200,
      },
      velocity: {
        x: 4,
        y: 0,
      },
      prevCollisions: [],
    };
    mockPacman = "pacman";
    collisions = [];
    mockVariables = "variables";
    mockRedGhost = "redGhost";
    mockCalculateDistance = jest.fn();
    mockpickDirection = jest.fn();
    mockEmptyPrevCollisions = jest.fn();
  });

  it("adds right to the prevCollisions array if the ghost is moving to the right", () => {
    huntAndScatter(
      mockGhost,
      mockPacman,
      collisions,
      mockVariables,
      mockRedGhost,
      mockCalculateDistance,
      mockpickDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["right"]);
  });

  it("adds left to the prevCollisions array if the ghost is moving to the left", () => {
    mockGhost.velocity = {
      x: -4,
      y: 0,
    };
    huntAndScatter(
      mockGhost,
      mockPacman,
      collisions,
      mockVariables,
      mockRedGhost,
      mockCalculateDistance,
      mockpickDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["left"]);
  });

  it("adds up to the prevCollisions array if the ghost is moving upwards", () => {
    mockGhost.velocity = {
      x: 0,
      y: -4,
    };
    huntAndScatter(
      mockGhost,
      mockPacman,
      collisions,
      mockVariables,
      mockRedGhost,
      mockCalculateDistance,
      mockpickDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["up"]);
  });

  it("adds down to the prevCollisions array if the ghost is moving downwards", () => {
    mockGhost.velocity = {
      x: 0,
      y: 4,
    };
    huntAndScatter(
      mockGhost,
      mockPacman,
      collisions,
      mockVariables,
      mockRedGhost,
      mockCalculateDistance,
      mockpickDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["down"]);
  });

  it("calls the necessary callback functions in order to determine the ghosts next direction and empty the prevCollisions array", () => {
    huntAndScatter(
      mockGhost,
      mockPacman,
      collisions,
      mockVariables,
      mockRedGhost,
      mockCalculateDistance,
      mockpickDirection,
      mockEmptyPrevCollisions
    );
    expect(mockCalculateDistance).toHaveBeenCalledTimes(1);
    expect(mockCalculateDistance).toHaveBeenCalledWith(
      mockPacman,
      mockGhost,
      [{ direction: "right" }],
      mockVariables,
      mockRedGhost
    );
    expect(mockpickDirection).toHaveBeenCalledTimes(1);
    expect(mockpickDirection).toHaveBeenCalledWith(
      [{ direction: "right" }],
      mockGhost
    );
    expect(mockEmptyPrevCollisions).toHaveBeenCalledTimes(1);
    expect(mockEmptyPrevCollisions).toHaveBeenCalledWith(mockGhost);
  });
});
