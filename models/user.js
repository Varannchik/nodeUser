const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  pwd: {
    type: String,
    require: true
  },
  });

const Model = mongoose.model('User', UserSchema);
module.exports = Model;