import express from "express";
import { Movies } from "../models/movies.model.js";
import moviesController from "../controller/movies.controller.js";

const router = express.Router();


router
  .route("/")
  .get(moviesController.getAllMovies)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get(moviesController.getMoviesbyID)
  .delete(moviesController.deleteMoviesbyID)
  .put(moviesController.updateMoviesbyID);


export default router;
