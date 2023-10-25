import express from "express";
import movies from "./movie.json" assert { type: "json" };
import cors from "cors";
import fs from "fs";
import { getInitialHTML } from "./dist/index.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, file) => {
    res.send(file.toString().replace("<!--app-->", getInitialHTML["/"]));
  });
});

app.get("/search", (req, res) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(req.query.query.toLowerCase())
  );
  res.json(filteredMovies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
