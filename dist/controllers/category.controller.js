"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _categoryservice = require('../services/category.service'); var _categoryservice2 = _interopRequireDefault(_categoryservice);

class CategoryController {
   async all (req, res) {
    const categories = await _categoryservice2.default.findAll();

    return res.json(categories);
  }

   async create (req, res) {
    const category = await _categoryservice2.default.create(req.body);

    return res.json(category);
  }
}

exports. default = new CategoryController();
