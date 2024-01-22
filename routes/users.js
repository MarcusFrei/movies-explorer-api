const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getUsers, getUserById, updateUserInfo, getMe,
} = require('../controllers/users');
const { updateUserScheme } = require('../joiSchemes');

router.get('/', getUsers);
router.get('/me', getMe);
router.get('/:userId', getUserById);
router.patch('/me', celebrate(updateUserScheme), updateUserInfo);

module.exports = router;
