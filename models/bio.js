// grab the things we need
var config = require('../config/config.js');
var mongoose = require('mongoose');
mongoose.connect(config.mongoConnectionUri);
var Schema = mongoose.Schema;

// create a schema
var bioSchema = new Schema({
  userId: { type: String, required: true },
  bioText: { type: String }
});

// the schema is useless so far
// we need to create a model using it
var Bio = mongoose.model('Bio', bioSchema);

// make this available to our users in our Node applications
module.exports = Bio;
