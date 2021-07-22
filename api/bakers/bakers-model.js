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

async function remove(id) {
  const removed = await getById(id);
  db("bakers").where("id", id).delete();
}
