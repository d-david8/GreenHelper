import request from "supertest";
import app from "../app.js";

let server = null;

beforeAll(() => {
  // pornim serverul pe un port liber
  server = app.listen(30001, () => {
    console.log("Test server running on port 30001");
  });
});

afterAll(async () => {
  // îl închidem corect după terminarea testului
  await (() => {
    server.close();
    console.log("Test server closed");
  })();
  server = null;
});

test("Health check endpoint should return status 200 and success message", async () => {
  const res = await request(server).get("/api/v1/health");

  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty("success", true);
  expect(res.body.data).toHaveProperty("status", "ok");
});
