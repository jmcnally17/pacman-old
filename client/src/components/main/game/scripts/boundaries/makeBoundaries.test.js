import makeBoundaries from "./makeBoundaries";
import Boundary from "../../models/boundary";

jest.mock("../../models/boundary");

let mockBoundary;
let mockLength;

describe("makeBoundaries", () => {
  beforeEach(() => {
    Boundary.mockClear();
    mockBoundary = new Boundary();
    mockLength = 20;
  });

  it("returns an array of the four tunnel boundaries for an empty map", () => {
    expect(JSON.stringify(makeBoundaries([[]], 20))).toEqual(
      JSON.stringify([mockBoundary, mockBoundary, mockBoundary, mockBoundary])
    );
  });

  it("returns an array of appropriate boundary objects for each type of boundary as well as the tunnel boundaries", () => {
    expect(
      JSON.stringify(
        makeBoundaries(
          [
            ["-", "|"],
            ["1", "2", "3", "4"],
            [".", " "],
          ],
          mockLength
        )
      )
    ).toEqual(
      JSON.stringify([
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
        mockBoundary,
      ])
    );
  });
});
