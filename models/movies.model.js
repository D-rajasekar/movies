import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const Movies = sequelize.define(
  "Movies",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
      // allowNull defaults to true
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 10,
      },
      // allowNull defaults to true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Movies === sequelize.models.Movies); // true
export { Movies };
