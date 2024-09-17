const db = require("../../data/dbConfig");
const Bakers = require("./bakers-model");

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

describe("bakers model", () => {
  describe("getAll", () => {
    test("it returns all bakers in the table", async () => {
      const bakers = await Bakers.getAll();
      expect(bakers).toMatchObject([
        { name: "Terry" },
        { name: "Rahul" },
        { name: "Ruby" },
        { name: "Kim Joy" },
      ]);
    });
  });
  //   describe("getById", () => {
  //     test("it returns the baker with the correct id", async () => {
  //       const baker1 = await Bakers.getById(1);
  //       const baker2 = await Bakers.getById(2);
  //       const baker3 = await Bakers.getById(3);
  //       expect(baker1).toBe([{ name: "Terry" }]);
  //     });
  //   });
});
