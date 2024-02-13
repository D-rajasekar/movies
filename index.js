import express from "express";
import { sequelize } from "./config.js";
import { Movies } from "./models/movies.model.js";
import Moviesrouter from "./routes/movies.route.js";
import Usersrouter from "./routes/users.route.js";
import { Signup } from "./models/users.model.js";
import cors from "cors"

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const app = express();
app.use(express.json()); //middleware
app.use(cors());
// const user1 = await Signup.create({
//   username: "Leo",
//   password: "password@123",
// });

//console.log("Jane's auto-generated ID:", user1.id);

const PORT = process.env.PORT;
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });

app.use("/movies", Moviesrouter);
app.use("/users", Usersrouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// const userPassword="password@123";
