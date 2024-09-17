const express = require("express");

const Bakers = require("./bakers/bakers-model");

const server = express();

server.use(express.json());

server.get("/api/bakers", (req, res) => {
  Bakers.getAll()
    .then((bakers) => {
      res.status(200).json(bakers);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

server.post("/api/bakers", (req, res) => {
  Bakers.insert(req.body)
    .then((baker) => {
      res.status(201).json(baker);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

server.delete("/api/bakers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const baker = await Bakers.getById(id);
    await Bakers.remove(id);
    res.status(200).json(baker);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = server;
