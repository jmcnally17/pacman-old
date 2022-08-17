import calculateDistance from "./calculateDistance";

let mockPacman;
let mockGhost;
let mockPathwayOne;
let mockPathwayTwo;
let mockPathways;
let mockVariables;
let mockRedGhost;
let mockAddCoordinates;
let mockHunt;
let mockScatter;
let mockCalculateHypotenuse;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPacman = "pacman";
    mockGhost = "ghost";
    mockPathwayOne = "pathwayOne";
    mockPathwayTwo = "pathwayTwo";
    mockPathways = [mockPathwayOne, mockPathwayTwo];
    mockVariables = "variables";
    mockRedGhost = "redGhost";
    mockAddCoordinates = jest.fn();
    mockHunt = jest.fn();
    mockScatter = jest.fn();
    mockCalculateHypotenuse = jest.fn();
  });

  it("calls addCoordinates", () => {
    calculateDistance(
      mockPacman,
      mockGhost,
      mockPathways,
      mockVariables,
      mockRedGhost,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      1,
      mockPathwayOne,
      mockGhost,
      mockVariables
    );
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      2,
      mockPathwayTwo,
      mockGhost,
      mockVariables
    );
  });

  it("calls hunt if the ghost is hunting", () => {
    const mockHuntingGhost = {
      isHunting: true,
    };
    calculateDistance(
      mockPacman,
      mockHuntingGhost,
      mockPathways,
      mockVariables,
      mockRedGhost,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockHunt).toHaveBeenCalledTimes(2);
    expect(mockHunt).toHaveBeenNthCalledWith(
      1,
      mockHuntingGhost,
      mockPathwayOne,
      mockPacman,
      mockVariables,
      mockRedGhost
    );
    expect(mockHunt).toHaveBeenNthCalledWith(
      2,
      mockHuntingGhost,
      mockPathwayTwo,
      mockPacman,
      mockVariables,
      mockRedGhost
    );
  });

  it("calls scatter if the ghost is not hunting", () => {
    const mockScatteringGhost = {
      isHunting: false,
    };
    calculateDistance(
      mockPacman,
      mockScatteringGhost,
      mockPathways,
      mockVariables,
      mockRedGhost,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockScatter).toHaveBeenCalledTimes(2);
    expect(mockScatter).toHaveBeenNthCalledWith(
      1,
      mockScatteringGhost,
      mockPathwayOne
    );
    expect(mockScatter).toHaveBeenNthCalledWith(
      2,
      mockScatteringGhost,
      mockPathwayTwo
    );
  });

  it("calls calculateHypotenus", () => {
    calculateDistance(
      mockPacman,
      mockGhost,
      mockPathways,
      mockVariables,
      mockRedGhost,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
    expect(mockCalculateHypotenuse).toHaveBeenNthCalledWith(
      1,
      undefined,
      mockPathwayOne
    );
    expect(mockCalculateHypotenuse).toHaveBeenNthCalledWith(
      2,
      undefined,
      mockPathwayTwo
    );
  });
});
