"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);


class CategoryService {
  async findAll () {
    return await _Category2.default.find();
  }

  async findById (id) {
    return await _Category2.default.findById(id);
  }

  async findOne (name) {
    return await _Category2.default.findOne({ name });
  }

  async create (category) {
    return await _Category2.default.create(category);
  }
}

exports. default = new CategoryService();
