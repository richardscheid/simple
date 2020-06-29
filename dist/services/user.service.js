"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);


class UserService {
  async findAll () {
    return await _User2.default.find();
  }

  async findById (id, callback) {
    return await _User2.default.findById(id, callback).lean();
  }

  async findOne (email, callback) {
    return await _User2.default.findOne({ email: email.toLowerCase() }, callback);
  }

  async create (user) {
    return await _User2.default.create(user);
  }
}

exports. default = new UserService();
