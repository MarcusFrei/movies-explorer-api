const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Unauthorized = require('../errors/unauthorized');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    statics: {
      findUser(email, password) {
        return this.findOne({ email }).select('+password').then((user) => {
          if (user) {
            return bcrypt.compare(password, user.password)
              .then((answer) => {
                if (answer) return user;
                return Promise.reject(new Unauthorized('User is not authorized!'));
              });
          } return Promise.reject(new Unauthorized('User with current e-mail can\'t be found!'));
        });
      },
    },
  },
);

module.exports = mongoose.model('user', userSchema);
