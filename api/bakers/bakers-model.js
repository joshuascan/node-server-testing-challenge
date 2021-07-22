const db = require("../../data/dbConfig");

function getAll() {
  return db("bakers");
}

function getById(id) {
  return db("bakers").where("id", id);
}

async function insert(baker) {
  const [id] = await db("bakers").insert(baker);
  return getById(id);
}

function remove(id) {
  return db("bakers").where("id", id).delete();
}

module.exports = {
  getAll,
  getById,
  insert,
  remove,
};
