const express = require('express')
const router = express.Router()
const teams = require('../data/teams')

const { 
  getTeams, 
  setTeam, 
  getTeamByName, 
  updateTeam, 
  deleteTeam 
} = require ('../controllers/teamController')

router.route('/')
  .get(getTeams)
  .post(setTeam)

router.route('/:name')
  .get(getTeamByName)
  .patch(updateTeam)
  .delete(deleteTeam)
  
module.exports = router;