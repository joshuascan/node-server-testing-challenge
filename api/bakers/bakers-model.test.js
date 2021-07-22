const db = require("../../data/dbConfig");

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
