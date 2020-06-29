"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _alertbuilder = require('../builder/alert.builder');


var _Alert = require('../models/Alert'); var _Alert2 = _interopRequireDefault(_Alert);
var _categoryservice = require('../services/category.service'); var _categoryservice2 = _interopRequireDefault(_categoryservice);

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
      category = await _categoryservice2.default.findById(category_id );
      if (!category) return res.status(400).json({ error: 'Category does not exists!' });
    }

    const alert = await _Alert2.default.create(new (0, _alertbuilder.AlertBuilder)()
      .name(name)
      .target(target)
      .condition(condition)
      .cagetory(category)
      .build());

    return res.json(alert);
  }
}

exports. default = new AlertController();
