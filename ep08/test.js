import fs from "fs";
import util from "util";

const readFilePromise = util.promisify(fs.readFile);

// fs.readFile("package.json", (error, file) => {
//   console.log("result");
//   console.log(file.toString());
// });

// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (error, file) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(file);
//       }
//     });
//   });
// }
async function main() {
  try {
    const file = await readFilePromise("package.json");
    console.log(file.toString());
  } catch (err) {
    console.log(err);
  }
}

main();
