const express = require('express')
const router = express.Router()
const games = require('../data/games')

const { 
  getGames, 
  setGame, 
  getGamesByTeam, 
  getGamesByWinner, 
  // updateGame, 
  // deleteGame 
} = require ('../controllers/gameController')

router.route('/')
  .get(getGames)
  .post(setGame)

router.route('/:team')
  .get(getGamesByTeam)
  .get(getGamesByWinner)
  // .patch(updateGame)
  // .delete(deleteGame)
  
module.exports = router;