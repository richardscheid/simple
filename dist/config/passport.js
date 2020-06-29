"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _passport = require('passport'); var _passport2 = _interopRequireDefault(_passport);
var _passportlocal = require('passport-local'); var _passportlocal2 = _interopRequireDefault(_passportlocal);
var _userservice = require('../services/user.service'); var _userservice2 = _interopRequireDefault(_userservice);




const LocalStrategy = _passportlocal2.default.Strategy;

_passport2.default.serializeUser((user, done) => {
  done(undefined, user._id);
});

_passport2.default.deserializeUser((id, done) => {
  _userservice2.default.findById(id, (err, user) => {
    done(err, user);
  });
});

_passport2.default.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  _userservice2.default.findOne(email, (err, user) => {
    if (err) throw err;

    if (!user) { return done(undefined, false, { message: `Email ${email} not found.` }); }
    if (!user.validatePassword(password)) { return done(undefined, false, { message: 'Invalid email or password.' }); }

    return done(null, user);
  });
}));

 const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}; exports.isAuthenticated = isAuthenticated;

 const isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];

  const user = req.user ;
  if (user.tokens.find(token => token.kind === provider)) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
}; exports.isAuthorized = isAuthorized;
