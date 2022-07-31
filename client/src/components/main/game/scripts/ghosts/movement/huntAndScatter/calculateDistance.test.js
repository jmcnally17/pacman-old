import calculateDistance from "./calculateDistance";

let mockObject;
let mockPathways;
let mockAddCoordinates;
let mockHunt;
let mockScatter;
let mockCalculateHypotenuse;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPathways = [mockObject, mockObject];
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
      mockObject,
      mockHuntingGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockHunt).toHaveBeenCalledTimes(2);
    expect(mockScatter).toHaveBeenCalledTimes(0);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });

  it("calls the necessary callbacks for a scattering ghost", () => {
    const mockScatteringGhost = {
      isHunting: false,
    };
    calculateDistance(
      mockObject,
      mockScatteringGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockHunt,
      mockScatter,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockHunt).toHaveBeenCalledTimes(0);
    expect(mockScatter).toHaveBeenCalledTimes(2);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });
});
