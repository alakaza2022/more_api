// models/movieModel.js
const fetch = require("node-fetch");


const getAllMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThiZjY3M2FhMWRkYWVjNWE0YzM0YjZlZDlmMGE2YSIsInN1YiI6IjY1YTI1NDQ4NTY5MGI1MDEyOWFmZjI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RriLs2TuPOxrqyU1EItjBb6dLxl1w1dceJSWaU5xszE',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const movies = await response.json();
    
    return movies.results; // Assuming the API response contains a 'results' property with an array of movies
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    throw error
  }
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

const getMovieImages = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThiZjY3M2FhMWRkYWVjNWE0YzM0YjZlZDlmMGE2YSIsInN1YiI6IjY1YTI1NDQ4NTY5MGI1MDEyOWFmZjI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RriLs2TuPOxrqyU1EItjBb6dLxl1w1dceJSWaU5xszE',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const imagesData = await response.json();
    
    return imagesData.backdrops; // Assuming the API response contains a 'backdrops' property with an array of images
  } catch (error) {
    console.error(`Error fetching images for movie ${movieId}:`, error.message);
    throw error;
  }
};
// movieImageModel.js

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieImages,
};
