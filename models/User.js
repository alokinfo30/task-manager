const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

const UserSchema = new mongoose.Schema({
  // User details (username, email, password)
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  // Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
