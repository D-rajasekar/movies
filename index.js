import express from "express";
import { sequelize } from "./config.js";
import { Movies } from "./models/movies.model.js";
import Moviesrouter from "./routes/movies.route.js";

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const app = express();
app.use(express.json());
// const user1 = await Movies.create({
//   name: "Leo",
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BM2Y4MzQ3NmUtOWQ5My00YTFjLTkzNDMtNzliODQ5NTFmZjg3XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
//   rating: 8,
//   summary: "leooooooooooooooooo",
//   trailer: "https://youtu.be/Po3jStA673E?si=cq5ALjEq55YQebIB",
// });

//console.log("Jane's auto-generated ID:", user1.id);

const PORT = 4000;
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });

app.use("/movies", Moviesrouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
