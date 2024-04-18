const express = require('express')
const router = express.Router()
const conferences = require('../data/conferences')

const { 
  getConferences, 
  setConference, 
  getConferenceByName, 
  updateConference, 
  deleteConference 
} = require ('../controllers/conferenceController')

router.route('/')
  .get(getConferences)
  .post(setConference)

router.route('/:name')
  .get(getConferenceByName)
  .patch(updateConference)
  .delete(deleteConference)
  
module.exports = router;
  