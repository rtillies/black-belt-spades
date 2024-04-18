const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // unique index
  },
  description: {
    type: String,
    required: true,
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
  // timestamps: true,
});

conferenceSchema.statics.findByName = function(name) {
  return this.findOne({name: new RegExp(name, 'i')})
}

conferenceSchema.query.byName = function(name) {
  return this.where({name: new RegExp(name, 'i')})
}

conferenceSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
}) 

conferenceSchema.methods.updateConf = function() {
  console.log(`${this.name} Conference updated.`);
}

// conferenceSchema.post('save', function(doc, next) {
//   doc.updateConf()
//   next()
// }) 

module.exports = mongoose.model("Conference", conferenceSchema);
