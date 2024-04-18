const express = require('express')
const router = express.Router()
const games = require('../data/Games')

const { 
  getGames, 
  setGame, 
  getGamesByWinner, 
  // updateGame, 
  // deleteGame 
} = require ('../controllers/gameController')

router.route('/')
  .get(getGames)
  .post(setGame)

router.route('/:team')
  .get(getGamesByWinner)
  // .patch(updateGame)
  // .delete(deleteGame)
  
module.exports = router;