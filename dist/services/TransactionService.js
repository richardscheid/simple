"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Transaction = require('../models/Transaction'); var _Transaction2 = _interopRequireDefault(_Transaction);


class TransactionService {
  async findAll () {
    return await _Transaction2.default.find();
  }

  async findOne (place) {
    return await _Transaction2.default.findOne({ place });
  }

  async create (transaction) {
    return await _Transaction2.default.create(transaction);
  }
}

exports. default = new TransactionService();
