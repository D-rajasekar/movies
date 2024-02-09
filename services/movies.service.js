import { Movies } from "../models/movies.model.js";

async function getAllMoviesquery() {
  return await Movies.findAll();
}

async function createMoviequery(name, poster, rating, summary, trailer) {
  return await Movies.create({ name, poster, rating, summary, trailer });
}

async function getMoviesbyIDquery(id) {
  return await Movies.findOne({
    where: {
      id: id,
    },
  });
}

async function deleteMoviesbyIDquery(id) {
  return await Movies.destroy({
    where: {
      id: id,
    },
  });
}

async function updateMoviesbyIDquery(ans1, id) {
  return await Movies.update(ans1, {
    where: {
      id: id,
    },
  });
}
export default {
  getAllMoviesquery,
  createMoviequery,
  getAllMoviesquery,
  deleteMoviesbyIDquery,
  updateMoviesbyIDquery,
};
