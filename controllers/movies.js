const Movie = require('../models/movie');
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest');
const Forbidden = require('../errors/forbidden');

const getMovies = (req, res, next) => {
  const owner = req.user.id;
  Movie.find({ owner })
    .then((movies) => res.send({ movies }))
    .catch((err) => {
      next(err);
    });
};

const createMovie = (req, res, next) => {
  const owner = req.user.id;
  Movie.create({ ...req.body, owner })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Get invalid data for film creation!'));
      } else next(err);
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => new NotFound('Film with current _id can\'t be found!'))
    .then((movie) => {
      if (movie.owner.toString() === req.user.id) {
        return Movie.findByIdAndDelete(req.params.movieId);
      }
      return next(new Forbidden('This film can\'t be deleted!'));
    })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'NotFound') { next(new NotFound('Film with current _id can\'t be found!')); } else if (err.name === 'ValidationError' || err.name === 'BadRequest') { next(new BadRequest(err.message)); } else next(err);
    });
};

module.exports = {
  getMovies, createMovie, deleteMovie,
};
