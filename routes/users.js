const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  updateUserInfo, getMe,
} = require('../controllers/users');
const { updateUserScheme } = require('../joiSchemes');

router.get('/me', getMe);
router.patch('/me', celebrate(updateUserScheme), updateUserInfo);

module.exports = router;
