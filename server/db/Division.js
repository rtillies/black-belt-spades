const mongoose = require("mongoose");

const divisionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // unique index
  },
  description: {
    type: String,
    required: true,
  },
  conference: {
    // type: mongoose.SchemaTypes.ObjectId,
    type: String,
    ref: "Conference",
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

divisionSchema.statics.findByName = function(name) {
  return this.findOne({name: new RegExp(name, 'i')})
}

divisionSchema.query.byName = function(name) {
  return this.where({name: new RegExp(name, 'i')})
}

divisionSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
}) 

divisionSchema.methods.updateDivision = function() {
  console.log(`${this.name} Division updated.`);
}

// divisionSchema.post('save', function(doc, next) {
//   doc.updateConf()
//   next()
// }) 

module.exports = mongoose.model("Division", divisionSchema);
