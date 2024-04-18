const asyncHandler = require('express-async-handler');
const Conference = require('../db/Conference')

const getConferences = asyncHandler(async (req, res) => {
  const confs = await Conference.find();
  res.status(200).json(confs)
});

const setConference = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Conference name is required');
  }
  const conf = await Conference.create({
    name: req.body.name,
    description: req.body.description,
  });
  res.status(200).json(conf);
});

const getConferenceByName = asyncHandler(async (req, res) => {
  const conf = await Conference.findByName(req.params.name)
  if (!conf) {
    res.status(400);
    throw new Error(`Conference not found: ${req.params.name}`);
  }
  res.status(200).json(conf)
});

const updateConference = asyncHandler(async (req, res) => {
  const conf = await Conference.findByName(req.params.name)

  if (!conf) {
    res.status(400);
    throw new Error(`Conference not found: ${req.params.name}`);
  }

  const updatedConference = await Conference.findByIdAndUpdate(
    conf._id, req.body, { new: true, }
  );
  res.status(200).json(updatedConference)
});

const deleteConference = asyncHandler(async (req, res) => {
  const conf = await Conference.findByName(req.params.name)
  if (!conf) {
    res.status(400);
    throw new Error(`Conference not found: ${req.params.name}`);
  }

  await Conference.deleteOne({name: req.params.name})

  res.status(200).json({message: `${req.params.name} Conference deleted`})
});

module.exports = {
  getConferences,
  setConference,
  getConferenceByName,
  updateConference,
  deleteConference,
}