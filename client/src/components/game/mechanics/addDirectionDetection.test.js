import addDirectionDetection from "./addDirectionDetection";

let mockVariables;

describe("addDirectionDetection", () => {
  beforeEach(() => {
    mockVariables = {
      lastKeyPressed: "",
    };
  });

  it("sets the key to up when the ArrowUp key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    addDirectionDetection(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("up");
  });

  it("sets the key to left when the ArrowLeft key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    addDirectionDetection(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("left");
  });

  it("sets the key to right when the ArrowRight key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowRight" });
    addDirectionDetection(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("right");
  });

  it("sets the key to down when the ArrowDown key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    addDirectionDetection(mockVariables);
    window.dispatchEvent(event);
    expect(mockVariables.lastKeyPressed).toBe("down");
  });
});
