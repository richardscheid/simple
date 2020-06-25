"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const UserSchema = new (0, _mongoose.Schema)({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String }
}, {
  timestamps: true
});

exports. default = _mongoose.model('User', UserSchema);
