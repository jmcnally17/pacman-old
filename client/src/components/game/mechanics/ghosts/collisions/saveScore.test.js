import saveScore from "./saveScore";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
let mockGetBackendUrl;

describe("saveScore", () => {
  beforeEach(() => {
    fetch.resetMocks();
    mockGetBackendUrl = jest
      .fn()
      .mockReturnValueOnce("https://livesite.com/backend");
  });

  it("calls fetch to make a POST request to save the score to the database", async () => {
    const mockScore = {};
    const mockName = "";
    fetch.mockResponseOnce(
      JSON.stringify({ message: "your score has been saved" })
    );
    const response = await saveScore(mockScore, mockName, mockGetBackendUrl);
    expect(response).toBe("Success: your score has been saved");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mockGetBackendUrl).toHaveBeenCalledTimes(1);
  });

  it("returns an error when the fetch fails", async () => {
    const mockScore = {};
    const mockName = "";
    fetch.mockReject(() => Promise.reject("API is down"));
    const response = await saveScore(mockScore, mockName, mockGetBackendUrl);
    expect(response).toBe("Error: API is down");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mockGetBackendUrl).toHaveBeenCalledTimes(1);
  });
});
