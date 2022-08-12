import scatter from "./scatter";

let mockPathway;
let mockFindRedScatterPath;
let mockFindPinkScatterPath;
let mockFindCyanScatterPath;
let mockFindOrangeScatterPath;

describe("scatter", () => {
  beforeEach(() => {
    mockPathway = "pathway";
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
      mockPathway,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindRedScatterPath).toHaveBeenCalledWith(mockPathway);
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
      mockPathway,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkScatterPath).toHaveBeenCalledWith(mockPathway);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary functions on the cyan ghost", () => {
    const mockCyanGhost = {
      colour: "cyan",
    };
    scatter(
      mockCyanGhost,
      mockPathway,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindCyanScatterPath).toHaveBeenCalledWith(mockPathway);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary functions on the orange ghost", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    scatter(
      mockOrangeGhost,
      mockPathway,
      mockFindRedScatterPath,
      mockFindPinkScatterPath,
      mockFindCyanScatterPath,
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledWith(mockPathway);
  });
});
