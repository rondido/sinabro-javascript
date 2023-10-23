import express from "express";
import movies from "./movie.json" assert { type: "json" };
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!111");
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
