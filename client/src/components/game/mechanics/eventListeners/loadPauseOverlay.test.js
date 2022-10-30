import loadPauseOverlay from "./loadPauseOverlay";

let mockCtx;
let mockPauseTextImage;
let mockLoadPauseTint;
let mockLoadPauseText;

describe("loadPauseOverlay", () => {
  beforeEach(() => {
    mockCtx = "ctx";
    mockPauseTextImage = "pauseTextImage";
    mockLoadPauseTint = jest.fn();
    mockLoadPauseText = jest.fn();
  });

  it("calls loadPauseTint to add the black tint onto the screen", () => {
    loadPauseOverlay(
      mockCtx,
      mockPauseTextImage,
      mockLoadPauseTint,
      mockLoadPauseText
    );
    expect(mockLoadPauseTint).toHaveBeenCalledTimes(1);
    expect(mockLoadPauseTint).toHaveBeenCalledWith(mockCtx);
  });

  it("calls loadPauseText to add the pause text onto the screen", () => {
    loadPauseOverlay(
      mockCtx,
      mockPauseTextImage,
      mockLoadPauseTint,
      mockLoadPauseText
    );
    expect(mockLoadPauseText).toHaveBeenCalledTimes(1);
    expect(mockLoadPauseText).toHaveBeenCalledWith(mockCtx, mockPauseTextImage);
  });
});
