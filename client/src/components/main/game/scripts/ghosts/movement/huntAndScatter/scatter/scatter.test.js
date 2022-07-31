import scatter from "./scatter";

describe("scatter", () => {
  it("calls the necessary functions on the orange ghost", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    let mockObject;
    const mockFindOrangeScatterPath = jest.fn();
    scatter(mockOrangeGhost, mockObject, mockFindOrangeScatterPath);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
  });
});
