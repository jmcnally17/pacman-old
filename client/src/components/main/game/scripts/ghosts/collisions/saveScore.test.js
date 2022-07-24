import saveScore from "./saveScore";

describe("saveScore", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => "Your scored has been saved.",
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("calls fetch to make a POST request to save the score to the database", () => {
    const mockScore = {};
    const mockName = "";
    saveScore(mockScore, mockName);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
