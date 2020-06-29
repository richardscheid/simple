"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _transactioninterface = require('../interfaces/transaction.interface');
var _transactionbuilder = require('../builder/transaction.builder');

var _userservice = require('../services/user.service'); var _userservice2 = _interopRequireDefault(_userservice);
var _alertsservice = require('../services/alerts.service'); var _alertsservice2 = _interopRequireDefault(_alertsservice);
var _categoryservice = require('../services/category.service'); var _categoryservice2 = _interopRequireDefault(_categoryservice);
var _transactionservice = require('../services/transaction.service'); var _transactionservice2 = _interopRequireDefault(_transactionservice);

class TransactionController {
   async all (req, res) {
    const transactions = await _transactionservice2.default.findAll();

    return res.json(transactions);
  }

   async create (req, res) {
    const { amount, place, order, company, items } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await _userservice2.default.findById(user_id );
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await _categoryservice2.default.findOne(category_name );
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const transaction = await _transactionservice2.default.create(new (0, _transactionbuilder.TransactionBuilder)()
      .place(place)
      .items(items)
      .order(order)
      .amount(amount)
      .company(company)
      .user(user)
      .category(category)
      .status(_transactioninterface.Status.Unverified)
      .build()
    );

    _alertsservice2.default.process(transaction);

    return res.json(transaction);
  }
}

exports. default = new TransactionController();
