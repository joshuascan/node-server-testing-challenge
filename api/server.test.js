const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

test("is the correct environment", () => {
  expect(process.env.DB_ENV).toBe("testing");
});
beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("[GET] /api/bakers", () => {
  test("gets all bakers from bakers table", async () => {
    const res = await request(server).get("/api/bakers");
    expect(res.body).toHaveLength(4);
    expect(res.body).toMatchObject([
      { name: "Terry" },
      { name: "Rahul" },
      { name: "Ruby" },
      { name: "Kim Joy" },
    ]);
    expect(res.body[0]).toMatchObject({ id: 1, name: "Terry" });
  });
  test("responds with status code 200", async () => {
    const res = await request(server).get("/api/bakers");
    expect(res.status).toBe(200);
  });
});

describe("[POST] /api/bakers", () => {
  test("responds with newly created baker", async () => {
    const res = await request(server)
      .post("/api/bakers")
      .send({ name: "Mark" });
    expect(res.body).toMatchObject({ id: 5, name: "Mark" });
  });
  test("responds with status code 201", async () => {
    const res = await request(server)
      .post("/api/bakers")
      .send({ name: "Lottie" });
    expect(res.status).toBe(201);
  });
});
