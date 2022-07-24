import makeMove from "./makeMove";

let mockLastKeyPressed;

describe("makeMove", () => {
  beforeEach(() => {
    mockLastKeyPressed = {
      key: "",
    };
  });

  it("sets the key to up when the ArrowUp key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    makeMove(mockLastKeyPressed);
    window.dispatchEvent(event);
    expect(mockLastKeyPressed.key).toBe("up");
  });

  it("sets the key to left when the ArrowLeft key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    makeMove(mockLastKeyPressed);
    window.dispatchEvent(event);
    expect(mockLastKeyPressed.key).toBe("left");
  });

  it("sets the key to right when the ArrowRight key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowRight" });
    makeMove(mockLastKeyPressed);
    window.dispatchEvent(event);
    expect(mockLastKeyPressed.key).toBe("right");
  });

  it("sets the key to down when the ArrowDown key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    makeMove(mockLastKeyPressed);
    window.dispatchEvent(event);
    expect(mockLastKeyPressed.key).toBe("down");
  });
});
