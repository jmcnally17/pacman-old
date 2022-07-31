import huntPacman from "./huntPacman";

let mockGhost;
let collisions;
let mockObject;
let mockCalculateDistance;
let mockPickHuntDirection;
let mockEmptyPrevCollisions;

describe("huntPacman", () => {
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
    collisions = [];
    mockCalculateDistance = jest.fn();
    mockPickHuntDirection = jest.fn();
    mockEmptyPrevCollisions = jest.fn();
  });

  it("adds right to the prevCollisions array if the ghost is moving to the right", () => {
    huntPacman(
      mockGhost,
      mockObject,
      collisions,
      32,
      mockObject,
      mockCalculateDistance,
      mockPickHuntDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["right"]);
  });

  it("adds left to the prevCollisions array if the ghost is moving to the left", () => {
    mockGhost.velocity = {
      x: -4,
      y: 0,
    };
    huntPacman(
      mockGhost,
      mockObject,
      collisions,
      32,
      mockObject,
      mockCalculateDistance,
      mockPickHuntDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["left"]);
  });

  it("adds up to the prevCollisions array if the ghost is moving upwards", () => {
    mockGhost.velocity = {
      x: 0,
      y: -4,
    };
    huntPacman(
      mockGhost,
      mockObject,
      collisions,
      32,
      mockObject,
      mockCalculateDistance,
      mockPickHuntDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["up"]);
  });

  it("adds down to the prevCollisions array if the ghost is moving downwards", () => {
    mockGhost.velocity = {
      x: 0,
      y: 4,
    };
    huntPacman(
      mockGhost,
      mockObject,
      collisions,
      32,
      mockObject,
      mockCalculateDistance,
      mockPickHuntDirection,
      mockEmptyPrevCollisions
    );
    expect(mockGhost.prevCollisions).toEqual(["down"]);
  });

  it("calls the necessary callback functions in order to determine the ghosts next direction and empty the prevCollisions array", () => {
    huntPacman(
      mockGhost,
      mockObject,
      collisions,
      32,
      mockObject,
      mockCalculateDistance,
      mockPickHuntDirection,
      mockEmptyPrevCollisions
    );
    expect(mockCalculateDistance).toHaveBeenCalledTimes(1);
    expect(mockPickHuntDirection).toHaveBeenCalledTimes(1);
    expect(mockEmptyPrevCollisions).toHaveBeenCalledTimes(1);
  });
});
