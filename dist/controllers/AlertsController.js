"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Alerts = require('../models/Alerts'); var _Alerts2 = _interopRequireDefault(_Alerts);

class AlertController {
   async all (req, res) {
    const alerts = await _Alerts2.default.find();

    return res.json(alerts);
  }
}

exports. default = new AlertController();
