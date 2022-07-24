import changeDirection from "./changeDirection";

let mockPacman;
let mockObject;
let mockCheckDirectionChange;

describe("changeDirection", () => {
  beforeEach(() => {
    mockPacman = {
      speed: 5,
    };
    mockCheckDirectionChange = jest.fn();
  });

  it("calls checkDirectionChange if the last key pressed is up", () => {
    const mockLastKeyPressed = {
      key: "up",
    };
    changeDirection(
      mockLastKeyPressed,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is down", () => {
    const mockLastKeyPressed = {
      key: "down",
    };
    changeDirection(
      mockLastKeyPressed,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is right", () => {
    const mockLastKeyPressed = {
      key: "right",
    };
    changeDirection(
      mockLastKeyPressed,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is left", () => {
    const mockLastKeyPressed = {
      key: "left",
    };
    changeDirection(
      mockLastKeyPressed,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("does not call checkDirectionChange if the last key pressed is empty", () => {
    const mockLastKeyPressed = {
      key: "",
    };
    changeDirection(
      mockLastKeyPressed,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(0);
  });
});
