import displayLives from "./displayLives";

describe("displayLives", () => {
  it("calls document.querySelector to find the lives element and sets its inner text", () => {
    const mockVariables = {
      lives: 2,
    };
    const mockLivesEl = {
      innerText: "",
    };
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValue(mockLivesEl);
    displayLives(mockVariables);
    expect(document.querySelector).toHaveBeenCalledTimes(1);
    expect(document.querySelector).toHaveBeenCalledWith("#lives");
    expect(mockLivesEl.innerText).toBe("Lives: 2");
  });
});
