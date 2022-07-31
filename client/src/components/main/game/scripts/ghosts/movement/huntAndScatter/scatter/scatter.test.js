import scatter from "./scatter";

let mockObject;
let mockFindRedScatterPath;
let mockFindPinkScatterPath;
let mockFindCyanScatterPath;
let mockFindOrangeScatterPath;

describe("scatter", () => {
  beforeEach(() => {
    mockFindRedScatterPath = jest.fn();
    mockFindPinkScatterPath = jest.fn();
    mockFindCyanScatterPath = jest.fn();
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
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(0);
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
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary functions on the cyan ghost", () => {
    const mockCyanGhost = {
      colour: "cyan",
    };
    scatter(
      mockCyanGhost,
      mockObject,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(1);
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
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
  });
});
