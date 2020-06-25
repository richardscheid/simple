"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _AlertService = require('../services/AlertService'); var _AlertService2 = _interopRequireDefault(_AlertService);
var _TransactionFactory = require('../factory/TransactionFactory'); var _TransactionFactory2 = _interopRequireDefault(_TransactionFactory);
var _TransactionService = require('../services/TransactionService'); var _TransactionService2 = _interopRequireDefault(_TransactionService);

class TransactionController {
   async all (req, res) {
    const transactions = await _TransactionService2.default.findAll();

    return res.json(transactions);
  }

   async create (req, res) {
    const { amount, place, order, company, items } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await _User2.default.findById(user_id).lean();
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await _Category2.default.findOne({ name: category_name }).lean();
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const trn = _TransactionFactory2.default.build(amount, place, order, company, items, user, category);

    const transaction = await _TransactionService2.default.create(trn);

    _AlertService2.default.process(transaction);

    return res.json(transaction);
  }
}

exports. default = new TransactionController();
