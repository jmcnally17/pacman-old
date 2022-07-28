import implementGhosts from "./implementGhosts";

let mockGhostOne;
let mockGhostsOne;
let mockGhostTwo;
let mockGhostsTwo;
let mockObject;
let mockcheckSpeedMatchesState;
let mockAssignSprite;
let mockImplementTunnel;
let mockUpdateCollisions;
let mockPickGhostDirection;
let mockCheckPacmanGhostCollision;

describe("implementGhosts", () => {
  beforeEach(() => {
    mockGhostOne = {
      update: () => undefined,
      prevCollisions: ["up", "down"],
    };
    mockGhostsOne = [mockGhostOne, mockGhostOne, mockGhostOne];
    mockGhostTwo = {
      update: () => undefined,
      prevCollisions: [],
    };
    mockGhostsTwo = [mockGhostTwo, mockGhostTwo];
    mockcheckSpeedMatchesState = jest.fn();
    mockAssignSprite = jest.fn();
    mockImplementTunnel = jest.fn();
    mockUpdateCollisions = jest.fn();
    mockPickGhostDirection = jest.fn();
    mockCheckPacmanGhostCollision = jest.fn();
  });

  it("calls the necessary callback functions to implement the ghosts functionality", () => {
    const updateSpy = jest.spyOn(mockGhostOne, "update");
    implementGhosts(
      mockGhostsOne,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockcheckSpeedMatchesState,
      mockAssignSprite,
      mockImplementTunnel,
      mockUpdateCollisions,
      mockPickGhostDirection,
      mockCheckPacmanGhostCollision
    );
    expect(mockcheckSpeedMatchesState).toHaveBeenCalledTimes(3);
    expect(mockAssignSprite).toHaveBeenCalledTimes(3);
    expect(updateSpy).toHaveBeenCalledTimes(3);
    expect(mockImplementTunnel).toHaveBeenCalledTimes(3);
    expect(mockUpdateCollisions).toHaveBeenCalledTimes(3);
    expect(mockPickGhostDirection).toHaveBeenCalledTimes(3);
    expect(mockCheckPacmanGhostCollision).toHaveBeenCalledTimes(3);
  });

  it("does not call pickGhostDirection when the collisions array is equal to the prevCollisions array", () => {
    implementGhosts(
      mockGhostsTwo,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockcheckSpeedMatchesState,
      mockAssignSprite,
      mockImplementTunnel,
      mockUpdateCollisions,
      mockPickGhostDirection,
      mockCheckPacmanGhostCollision
    );
    expect(mockPickGhostDirection).toHaveBeenCalledTimes(0);
  });
});
