import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const Signup = sequelize.define(
  "Signup",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Signup === sequelize.models.Signup); // true
export { Signup };
