const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getCards, createCard, deleteCard,
} = require('../controllers/cards');
const { cardIdScheme, createCardScheme } = require('../joiSchemes');

router.get('/', getCards);
router.post('/', celebrate(createCardScheme), createCard);
router.delete('/:cardId', celebrate(cardIdScheme), deleteCard);

module.exports = router;
