import scatter from "./scatter";

let mockObject;
let mockFindRedScatterPath;
let mockFindPinkScatterPath;
let mockFindOrangeScatterPath;

describe("scatter", () => {
  beforeEach(() => {
    mockFindRedScatterPath = jest.fn();
    mockFindPinkScatterPath = jest.fn();
    mockFindOrangeScatterPath = jest.fn();
  });

  it("calls the necessary functions on the red ghost", () => {
    const mockRedGhost = {
      colour: "red",
    };
    scatter(
      mockRedGhost,
      mockObject,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary functions on the pink ghost", () => {
    const mockPinkGhost = {
      colour: "pink",
    };
    scatter(
      mockPinkGhost,
      mockObject,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary functions on the orange ghost", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    scatter(
      mockOrangeGhost,
      mockObject,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
  });
});
