import { Movies } from "../models/movies.model.js";
import moviesService from "../services/movies.service.js";

async function getAllMovies(request, response) {
  // means API end point
  var ans = await moviesService.getAllMoviesquery();
  response.send(ans);
}

async function createMovie(request, response) {
  console.log(request.body);
  const { name, poster, rating, summary, trailer } = request.body;
  response.send(
    await moviesService.createMoviequery(name, poster, rating, summary, trailer)
  );
}

async function getMoviesbyID(request, response) {
  //   console.log(request.params.id);
  const { id } = request.params;
  var ans = await moviesService.getMoviesbyIDquery(id);

  const NOT_FOUND_MSG = { msg: "ID not found" };
  ans ? response.send(ans) : response.status(404).send(NOT_FOUND_MSG);
}

async function deleteMoviesbyID(request, response) {
  var NOT_FOUND_MSG = { msg: "user not found" };
  const { id } = request.params;
  var ans = await moviesService.deleteMoviesbyIDquery(id);
  ans ? response.send("deleted") : response.status(404).send(NOT_FOUND_MSG);
}

async function updateMoviesbyID(request, response) {
  console.log(request.params.id);
  const { id } = request.params;
  const ans1 = request.body;

  var ans = await moviesService.updateMoviesbyIDquery(ans1, id);

  const NOT_FOUND_MSG = { msg: "ID not found" };
  ans ? response.send(ans) : response.status(404).send(NOT_FOUND_MSG);
}
export default {
  getAllMovies,
  createMovie,
  getMoviesbyID,
  deleteMoviesbyID,
  updateMoviesbyID,
};
