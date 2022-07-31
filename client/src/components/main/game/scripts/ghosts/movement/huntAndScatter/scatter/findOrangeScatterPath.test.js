import findOrangeScatterPath from "./findOrangeScatterPath";

describe("findOrangeScatterPath", () => {
  it("returns a vector from the orange ghosts position to its scatter corner", () => {
    const mockPathway = {
      position: {
        x: 280,
        y: 420,
      },
    };
    expect(findOrangeScatterPath(mockPathway)).toEqual({
      x: -280,
      y: 572,
    });
  });
});
