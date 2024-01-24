const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { movieIdScheme, createMovieScheme } = require('../joiSchemes');

router.get('/', getMovies);
router.post('/', celebrate(createMovieScheme), createMovie);
router.delete('/:movieId', celebrate(movieIdScheme), deleteMovie);

module.exports = router;
