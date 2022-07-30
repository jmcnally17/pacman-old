import calculateDistance from "./calculateDistance";

let mockPacman;
let mockRedGhost;
let mockPinkGhost;
let mockaddCoordinates;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPacman = {
      position: {
        x: 200,
        y: 380,
      },
      rotation: 0,
    };
    mockRedGhost = {
      colour: "red",
    };
    mockPinkGhost = {
      colour: "pink",
    };
    mockaddCoordinates = jest.fn();
  });

  it("calculates the distance between pacman and each pathway if the ghost is red", () => {
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockRedGhost,
      mockPathways,
      32,
      mockaddCoordinates
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares to the right of pacman facing right and each pathway if the ghost is pink", () => {
    const mockPathwayOne = {
      position: {
        x: 331,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 323,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockaddCoordinates
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares below pacman facing down and each pathway if the ghost is pink", () => {
    mockPacman.rotation = Math.PI / 2;
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 512,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 496,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockaddCoordinates
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares to the left of pacman facing left and each pathway if the ghost is pink", () => {
    mockPacman.rotation = Math.PI;
    const mockPathwayOne = {
      position: {
        x: 75,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 67,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockaddCoordinates
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares above pacman facing up and each pathway if the ghost is pink", () => {
    mockPacman.rotation = (Math.PI * 3) / 2;
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 256,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 240,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockaddCoordinates
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });
});
