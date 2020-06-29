"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _passport = require('passport'); var _passport2 = _interopRequireDefault(_passport);

class AuthController {
  async login (req, res, next) {
    _passport2.default.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.redirect('/login');
      }

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.redirect('/');
      });
    })(req, res, next);
  }

  async logout (req, res) {
    req.logout();
    res.redirect('/');
  }
}

exports. default = new AuthController();
