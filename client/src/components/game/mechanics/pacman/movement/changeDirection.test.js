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
    const mockVariables = {
      lastKeyPressed: "up",
    };
    changeDirection(
      mockVariables,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is down", () => {
    const mockVariables = {
      lastKeyPressed: "down",
    };
    changeDirection(
      mockVariables,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is right", () => {
    const mockVariables = {
      lastKeyPressed: "right",
    };
    changeDirection(
      mockVariables,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("calls checkDirectionChange if the last key pressed is left", () => {
    const mockVariables = {
      lastKeyPressed: "left",
    };
    changeDirection(
      mockVariables,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(1);
  });

  it("does not call checkDirectionChange if the last key pressed is empty", () => {
    const mockVariables = {
      lastKeyPressed: "",
    };
    changeDirection(
      mockVariables,
      mockPacman,
      mockObject,
      mockCheckDirectionChange
    );
    expect(mockCheckDirectionChange).toHaveBeenCalledTimes(0);
  });
});
