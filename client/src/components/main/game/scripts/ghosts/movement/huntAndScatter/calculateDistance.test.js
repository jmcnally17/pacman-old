import calculateDistance from "./calculateDistance";

let mockObject;
let mockPathways;
let mockAddCoordinates;
let mockHunt;
let mockCalculateHypotenuse;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPathways = [mockObject, mockObject];
    mockAddCoordinates = jest.fn();
    mockHunt = jest.fn();
    mockCalculateHypotenuse = jest.fn();
  });

  it("calls the necessary callbacks for each ghost", () => {
    calculateDistance(
      mockObject,
      mockObject,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockHunt,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockHunt).toHaveBeenCalledTimes(2);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });
});
