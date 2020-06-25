"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
var _IAlert = require('../interfaces/IAlert');
var _ITransaction = require('../interfaces/ITransaction');
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
    const update = { status: _ITransaction.Status.Onalert };

    await _Transaction2.default.findByIdAndUpdate(filter, update);
  }

  async create (alert, transaction) {
    return await _Alerts2.default.create({
      name: alert.name,
      target: alert.target,
      amount: transaction.amount,
      condition: alert.condition,
      status: _ITransaction.Status.Onalert,
      alert: alert._id,
      category: _optionalChain([alert, 'optionalAccess', _ => _.category, 'optionalAccess', _2 => _2._id]),
      transaction: transaction._id
    });
  }

   verify (amount, target, condition) {
    switch (condition) {
      case _IAlert.Conditions.GreaterThan:
        return amount > target;

      case _IAlert.Conditions.GreaterThanEquals:
        return amount >= target;

      case _IAlert.Conditions.EqualsTo:
        return amount === target;

      case _IAlert.Conditions.LessThanEquals:
        return amount <= target;

      case _IAlert.Conditions.LessThan:
        return amount < target;
    }

    return false;
  }
}

exports. default = new AlertService();
