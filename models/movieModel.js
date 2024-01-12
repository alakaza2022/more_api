// models/movieModel.js
const movies = [];

const getAllMovies = () => {
  return movies;
};

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id);
};

const createMovie = (movie) => {
  movies.push(movie);
};

const updateMovie = (id, updatedMovie) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
  }
};

const deleteMovie = (id) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
