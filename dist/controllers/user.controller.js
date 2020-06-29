"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _userservice = require('../services/user.service'); var _userservice2 = _interopRequireDefault(_userservice);

class UserController {
   async all (req, res) {
    const users = await _userservice2.default.findAll();

    return res.json(users);
  }

   async create (req, res) {
    const user = await _userservice2.default.create(req.body);

    return res.json(user);
  }
}

exports. default = new UserController();
