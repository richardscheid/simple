"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _mongoose = require('mongoose');


const UserSchema = new (0, _mongoose.Schema)({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String },
  tokens: { type: Array }
}, {
  timestamps: true
});

UserSchema.pre('save', function save (next) {
  const user = this ;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = _bcrypt2.default.hashSync(user.password, 10);
  next();
});

UserSchema.methods.validatePassword = function (candidatePassword)  {
  return _bcrypt2.default.compareSync(candidatePassword, this.password);
};

exports. default = _mongoose.model('User', UserSchema);
