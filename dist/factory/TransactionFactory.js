"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Transaction = require('../models/Transaction'); var _Transaction2 = _interopRequireDefault(_Transaction);
var _ITransaction = require('../interfaces/ITransaction');

class TransactionFactory {
   build (amount, place, order, company, items, user, category) {
    const trn = new (0, _Transaction2.default)();
    trn.place = place;
    trn.order = order;
    trn.items = items;
    trn.amount = amount;
    trn.company = company;
    trn.user = user._id;
    trn.category = category._id;
    trn.status = _ITransaction.Status.Unverified;

    return trn;
  }
}

exports. default = new TransactionFactory();
