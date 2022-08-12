import calculateDistance from "./calculateDistance";

let mockPacman;
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

  it("calls the necessary callbacks for a hunting ghost", () => {
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
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      1,
      mockPathwayOne,
      mockHuntingGhost,
      mockVariables
    );
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      2,
      mockPathwayTwo,
      mockHuntingGhost,
      mockVariables
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
    expect(mockScatter).toHaveBeenCalledTimes(0);
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

  it("calls the necessary callbacks for a scattering ghost", () => {
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
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      1,
      mockPathwayOne,
      mockScatteringGhost,
      mockVariables
    );
    expect(mockAddCoordinates).toHaveBeenNthCalledWith(
      2,
      mockPathwayTwo,
      mockScatteringGhost,
      mockVariables
    );
    expect(mockHunt).toHaveBeenCalledTimes(0);
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
