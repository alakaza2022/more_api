// controllers/movieController.js
const movieModel = require('../models/movieModel');

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.getAllMovies();
    res.json(movies).status(200);
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMovieById = (req, res) => {
  const { id } = req.params;
  const movie = movieModel.getMovieById(id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

const createMovie = (req, res) => {
  const newMovie = req.body;
  movieModel.createMovie(newMovie);
  res.json({ message: 'Movie created successfully!' });
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const updatedMovie = req.body;
  movieModel.updateMovie(id, updatedMovie);
  res.json({ message: 'Movie updated successfully!' });
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  movieModel.deleteMovie(id);
  res.json({ message: 'Movie deleted successfully!' });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
