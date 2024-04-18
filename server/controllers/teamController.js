const asyncHandler = require('express-async-handler');
const Team = require('../db/Team')

const getTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find();
  res.status(200).json(teams)
});

const setTeam = asyncHandler(async (req, res) => {
  if (!req.body.teamID || !req.body.name || !req.body.division || !req.body.conference || !req.body.captain || !req.body.partner || !req.body.location) {
    res.status(400);
    throw new Error(`Team required information: 
      Team ID, Name, Division, Conference, Captain, Partner, Location`);
  }
  const team = await Team.create({
    teamID: req.body.teamID,
    name: req.body.name,
    division: req.body.division,
    conference: req.body.conference,
    captain: req.body.captain,
    partner: req.body.partner,
    location: req.body.location,
    wins: 0,
    loss: 0,
  });
  res.status(200).json(team);
});

const getTeamByName = asyncHandler(async (req, res) => {
  const team = await Team.findByName(req.params.name)
  if (!team) {
    res.status(400);
    throw new Error(`Team not found: ${req.params.name}`);
  }
  res.status(200).json(team)
});

const updateTeam = asyncHandler(async (req, res) => {
  const team = await Team.findByName(req.params.name)

  if (!team) {
    res.status(400);
    throw new Error(`Team not found: ${req.params.name}`);
  }

  const updatedTeam = await Team.findByIdAndUpdate(
    team._id, req.body, { new: true, }
  );
  res.status(200).json(updatedTeam)
});

const deleteTeam = asyncHandler(async (req, res) => {
  const name = req.params.name
  const team = await Team.findByName(name)
  if (!team) {
    res.status(400);
    throw new Error(`Team not found: ${name}`);
  }

  await Team.deleteOne({name: name})

  res.status(200).json({message: `Team deleted: ${name}`})
});

module.exports = {
  getTeams,
  setTeam,
  getTeamByName,
  updateTeam,
  deleteTeam,
}