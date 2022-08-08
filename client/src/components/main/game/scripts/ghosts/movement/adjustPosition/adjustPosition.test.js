import adjustPosition from "./adjustPosition";

let mockShiftBeforeRecovering;
let mockShiftRegular;

describe("adjustPosition", () => {
  beforeEach(() => {
    mockShiftBeforeRecovering = jest.fn();
    mockShiftRegular = jest.fn();
  });

  it("calls shiftBeforeRecovering if isRecovering is true", () => {
    const mockGhost = {
      isRecovering: true,
    };
    adjustPosition(mockGhost, mockShiftBeforeRecovering, mockShiftRegular);
    expect(mockShiftBeforeRecovering).toHaveBeenCalledTimes(1);
    expect(mockShiftRegular).toHaveBeenCalledTimes(0);
  });

  it("calls shiftRegular if isRecovering is false", () => {
    const mockGhost = {
      isRecovering: false,
    };
    adjustPosition(mockGhost, mockShiftBeforeRecovering, mockShiftRegular);
    expect(mockShiftBeforeRecovering).toHaveBeenCalledTimes(0);
    expect(mockShiftRegular).toHaveBeenCalledTimes(1);
  });
});
