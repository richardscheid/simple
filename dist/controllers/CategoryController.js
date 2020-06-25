"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);

class CategoryController {
   async all (req, res) {
    const categories = await _Category2.default.find();

    return res.json(categories);
  }

   async create (req, res) {
    const category = await _Category2.default.create(req.body);

    return res.json(category);
  }
}

exports. default = new CategoryController();
