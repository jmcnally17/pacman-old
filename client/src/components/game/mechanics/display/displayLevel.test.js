import displayLevel from "./displayLevel";

describe("displayLevel", () => {
  it("calls document.querySelector to find the level element and sets its inner text", () => {
    const mockVariables = {
      level: 4,
    };
    const mockLevelEl = {
      innerText: "",
    };
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValue(mockLevelEl);
    displayLevel(mockVariables);
    expect(document.querySelector).toHaveBeenCalledTimes(1);
    expect(document.querySelector).toHaveBeenCalledWith("#level");
    expect(mockLevelEl.innerText).toBe("Level: 4");
  });
});
