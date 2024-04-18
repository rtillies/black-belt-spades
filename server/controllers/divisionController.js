const asyncHandler = require('express-async-handler');
const Division = require('../db/Division')

const getDivisions = asyncHandler(async (req, res) => {
  const confs = await Division.find();
  res.status(200).json(confs)
});

const setDivision = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.conference) {
    res.status(400);
    throw new Error(`Division required information: 
    Name, Description, Conference`);
  }
  const conf = await Division.create({
    name: req.body.name,
    description: req.body.description,
    conference: req.body.conference,
  });
  res.status(200).json(conf);
});

const getDivisionByName = asyncHandler(async (req, res) => {
  const conf = await Division.findByName(req.params.name)
  if (!conf) {
    res.status(400);
    throw new Error(`Division not found: ${req.params.name}`);
  }
  res.status(200).json(conf)
});

const updateDivision = asyncHandler(async (req, res) => {
  const conf = await Division.findByName(req.params.name)

  if (!conf) {
    res.status(400);
    throw new Error(`Division not found: ${req.params.name}`);
  }

  const updatedDivision = await Division.findByIdAndUpdate(
    conf._id, req.body, { new: true, }
  );
  res.status(200).json(updatedDivision)
});

const deleteDivision = asyncHandler(async (req, res) => {
  const conf = await Division.findByName(req.params.name)
  if (!conf) {
    res.status(400);
    throw new Error(`Division not found: ${req.params.name}`);
  }

  await Division.deleteOne({name: req.params.name})

  res.status(200).json({message: `${req.params.name} Division deleted`})
});

module.exports = {
  getDivisions,
  setDivision,
  getDivisionByName,
  updateDivision,
  deleteDivision,
}