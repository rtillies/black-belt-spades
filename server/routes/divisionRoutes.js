const express = require('express')
const router = express.Router()
const divisions = require('../data/divisions')

const { 
  getDivisions, 
  setDivision, 
  getDivisionByName, 
  updateDivision, 
  deleteDivision 
} = require ('../controllers/divisionController')

router.route('/')
  .get(getDivisions)
  .post(setDivision)

router.route('/:name')
  .get(getDivisionByName)
  .patch(updateDivision)
  .delete(deleteDivision)
  
module.exports = router;
  