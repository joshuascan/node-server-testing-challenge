const express = require("express");

const Bakers = require("./bakers/bakers-model");

const server = express();

server.use(express.json());

server.get("/api/bakers", (req, res) => {
  res.status(200).json({ message: "Get all bakers" });
});

server.post("/api/bakers", (req, res) => {
  res.status(201).json({ message: "Create new baker" });
});

server.delete("/api/bakers/:id", (req, res) => {
  res.status(200).json({ message: "Baker deleted" });
});

module.exports = server;
