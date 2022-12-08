import displayPleaseWait from "./displayPleaseWait";

let mockCtx;
let mockLoadTint;

describe("displayPleaseWait", () => {
  beforeEach(() => {
    mockCtx = "ctx";
    mockLoadTint = jest.fn();
  });

  it("calls loadTint to darken the board", () => {
    displayPleaseWait(mockCtx, mockLoadTint);
    expect(mockLoadTint).toHaveBeenCalledTimes(1);
    expect(mockLoadTint).toHaveBeenCalledWith(mockCtx);
  });
});
