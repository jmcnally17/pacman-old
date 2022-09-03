const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

describe("Backend routes", () => {
  beforeEach(() => {
    sequelize.truncate();
  });

  it("show all scores from database", async () => {
    const res = await request(app).get("/scores");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("scores");
  });

  it("can save a score to the database", async () => {
    const res = await request(app).post("/scores").send({
      name: "John",
      points: 2000,
    });
    expect(res.statusCode).toBe(201);
  });
});
