const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamID: {
    type: String,
    required: true,
    unique: true, // unique index
    // index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  conference: {
    // type: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    ref: "Conference",
    required: true,
  },
  division: {
    // type: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    ref: "Division",
    required: true,
  },
  captain: {
    type: String,
    required: true,
  },
  partner: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    min: 0,
  },
  loss: {
    type: Number,
    min: 0,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
})

teamSchema.statics.findByName = function(name) {
  return this.findOne({name: new RegExp(name, 'i')})
}

teamSchema.query.byName = function(name) {
  return this.where({name: new RegExp(name, 'i')})
}

teamSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
}) 

teamSchema.methods.updateTeam = function() {
  console.log(`Team ${this.name} updated.`);
}

module.exports = mongoose.model("Team", teamSchema);
