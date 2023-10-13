import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

//public 폴더 안에 있는 모든 파일을 찾겠다
//app.use(express.static("public"));
//localhost:3000/assets/index...
app.use(express.static("dist"));
app.use(cors());
app.get("/api/test", (req, res) => {
  res.json({
    name: "jinhyeon",
  });
});

app.listen(port, () => {
  console.log("server running");
});
