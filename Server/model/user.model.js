const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String, // Optional field for the user's full name
  },
  usernameOrEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);