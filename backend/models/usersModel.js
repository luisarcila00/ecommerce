const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    required: true
  },
  full_name: {type: String},
  parent_id: {type: String},
  balance: {type: Number, default: 0},
  balance_comision: {type: Number, default: 0},
  document_type: {type: String},
  document: {type: String},
  phone: {type: String},
  address: {type: String},
  state: {type: String},
  city: {type: String},
  birth_date: {type: String},
  email: {type: String},
  creation_date: {type: String, default: Date.now},
  enabled: {type: Boolean, default: false},
  deleted: {type: Boolean, default: false},
  password_changed: {type: Boolean, default: false},
  IP: {type: String},
  last_session: {type: String},
  last_change_password: {type: String},
  is_online: {type: Boolean, default: false},
});
UserSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model("Users", UserSchema);