"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _alertsbuilder = require('../builder/alerts.builder');
var _alertinterface = require('../interfaces/alert.interface');
var _transactioninterface = require('../interfaces/transaction.interface');

var _Alert = require('../models/Alert'); var _Alert2 = _interopRequireDefault(_Alert);
var _Alerts = require('../models/Alerts'); var _Alerts2 = _interopRequireDefault(_Alerts);
var _Transaction = require('../models/Transaction'); var _Transaction2 = _interopRequireDefault(_Transaction);

class AlertService {
  async process (transaction) {
    const alerts = await _Alert2.default.find().populate('category');

    const amount = transaction.amount;
    const alertsId  = [];

    for (const alert of alerts) {
      const onAlert = this.verify(amount, alert.target, alert.condition);

      if (onAlert) {
        const result = this.create(alert, transaction);

        if (result) alertsId.push((await result)._id);
      }
    }

    if (alertsId) this.update(alertsId, transaction);
  }

  async update (alertsId, transaction) {
    const filter = { _id: transaction._id };
    const update = { status: _transactioninterface.Status.Onalert };

    await _Transaction2.default.findByIdAndUpdate(filter, update);
  }

  async create (alert, transaction) {
    return await _Alerts2.default.create(new (0, _alertsbuilder.AlertsBuilder)()
      .name(alert.name)
      .target(alert.target)
      .amount(transaction.amount)
      .condition(alert.condition)
      .status(_transactioninterface.Status.Onalert)
      .alert(alert)
      .transaction(transaction)
      .build()
    );
  }

   verify (amount, target, condition) {
    switch (condition) {
      case _alertinterface.Conditions.GreaterThan:
        return amount > target;

      case _alertinterface.Conditions.GreaterThanEquals:
        return amount >= target;

      case _alertinterface.Conditions.EqualsTo:
        return amount === target;

      case _alertinterface.Conditions.LessThanEquals:
        return amount <= target;

      case _alertinterface.Conditions.LessThan:
        return amount < target;
    }

    return false;
  }
}

exports. default = new AlertService();
