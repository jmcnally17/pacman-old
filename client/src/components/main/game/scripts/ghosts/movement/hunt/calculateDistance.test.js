import calculateDistance from "./calculateDistance";

let mockPacman;
let mockRedGhost;
let mockPinkGhost;
let mockFindPosition;

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
    mockFindPosition = jest.fn();
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
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares to the right of pacman facing right and each pathway if the ghost is pink", () => {
    const mockPathwayOne = {
      position: {
        x: 267,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 259,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares below pacman facing down and each pathway if the ghost is pink", () => {
    mockPacman.rotation = Math.PI / 2;
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 448,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 432,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares to the left of pacman facing left and each pathway if the ghost is pink", () => {
    mockPacman.rotation = Math.PI;
    const mockPathwayOne = {
      position: {
        x: 139,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 131,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });

  it("calculates the distance between four squares above pacman facing up and each pathway if the ghost is pink", () => {
    mockPacman.rotation = (Math.PI * 3) / 2;
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 320,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 304,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    calculateDistance(
      mockPacman,
      mockPinkGhost,
      mockPathways,
      32,
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });
});
