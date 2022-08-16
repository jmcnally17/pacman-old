import displayScore from "./displayScore";

describe("displayScore", () => {
  it("calls document.querySelector and sets the inner text", () => {
    const mockVariables = {
      score: 4820,
    };
    const mockScoreEl = {
      innerText: "",
    };
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValue(mockScoreEl);
    displayScore(mockVariables);
    expect(document.querySelector).toHaveBeenCalledTimes(1);
    expect(document.querySelector).toHaveBeenCalledWith("#score");
    expect(mockScoreEl.innerText).toBe("Score: 4820");
  });
});
