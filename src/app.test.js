const request = require("supertest");
const app = require("./app");

describe("app", () => {
  it("GET /api/health returns {ok:true}", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });

  it("POST /api/echo echoes JSON", async () => {
    const payload = { msg: "hi" };
    const res = await request(app).post("/api/echo").send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(payload);
  });
});
