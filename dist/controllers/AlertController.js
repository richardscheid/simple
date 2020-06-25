"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Alert = require('../models/Alert'); var _Alert2 = _interopRequireDefault(_Alert);
var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);


class AlertController {
   async all (req, res) {
    const alerts = await _Alert2.default.find();

    return res.json(alerts);
  }

   async create (req, res) {
    const { name, target, condition } = req.body;
    const { category_id } = req.headers;

    let category ;
    if (category_id) {
      category = await _Category2.default.findById(category_id);
      if (!category) return res.status(400).json({ error: 'Category does not exists!' });
    }

    const alert = await _Alert2.default.create({
      name,
      target,
      condition,
      category: category._id
    });

    return res.json(alert);
  }
}

exports. default = new AlertController();
