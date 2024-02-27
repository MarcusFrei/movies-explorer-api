const { Joi } = require("celebrate");

const signUpScheme = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
};
const signInScheme = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
};

const updateUserScheme = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
};

const createMovieScheme = {
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().min(2).max(100).required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    trailerLink: Joi.string().uri().required(),
    nameRU: Joi.string().min(2).max(45).required(),
    nameEN: Joi.string().min(2).max(45).required(),
    thumbnail: Joi.string().uri().required(),
    movieId: Joi.number().required(),
  }),
};

const movieIdScheme = {
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
};

module.exports = {
  signUpScheme,
  updateUserScheme,
  signInScheme,
  createMovieScheme,
  movieIdScheme,
};
