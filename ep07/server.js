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

const getFilteredMovies = (query) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

app.get("/search", (req, res) => {
  const filteredMovies = getFilteredMovies(req.query.query);
  fs.readFile("index.html", (err, file) => {
    res.send(
      file.toString().replace(
        "<!--app-->",
        getInitialHTML["/search"]({
          movies: filteredMovies,
        })
      )
    );
  });
});

app.get("/api/search", (req, res) => {
  res.json(getFilteredMovies(req.query.query));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
