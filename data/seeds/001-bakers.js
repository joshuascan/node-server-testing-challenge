exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bakers")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("bakers").insert([
        { name: "Terry" },
        { name: "Rahul" },
        { name: "Ruby" },
        { name: "Kim Joy" },
      ]);
    });
};
