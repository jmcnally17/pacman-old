const request = require("supertest");
const app = require("../app");

describe("Backend", () => {
  it("show all scores from database", async () => {
    const res = await request(app).get("/backend/scores");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("scores");
  });
});
