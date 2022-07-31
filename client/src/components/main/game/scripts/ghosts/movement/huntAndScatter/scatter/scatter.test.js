import scatter from "./scatter";

let mockObject;
let mockFindRedScatterPath;
let mockFindOrangeScatterPath;

describe("scatter", () => {
  beforeEach(() => {
    mockFindRedScatterPath = jest.fn();
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
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(1);
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
      mockFindOrangeScatterPath
    );
    expect(mockFindRedScatterPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
  });
});
