import makeMove from "./makeMove";

let mockVariables;

describe("makeMove", () => {
  beforeEach(() => {
    mockVariables = {
      lastKeyPressed: "",
    };
  });

  it("sets the key to up when the ArrowUp key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    makeMove(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("up");
  });

  it("sets the key to left when the ArrowLeft key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    makeMove(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("left");
  });

  it("sets the key to right when the ArrowRight key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowRight" });
    makeMove(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("right");
  });

  it("sets the key to down when the ArrowDown key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    makeMove(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("down");
  });
});
