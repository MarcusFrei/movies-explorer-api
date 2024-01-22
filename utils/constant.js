const {
  PORT = 3000,
  DB = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  secretCode,
  NODE_ENV,
} = process.env;

module.exports = {
  PORT,
  DB,
  secretCode,
  NODE_ENV,
};
