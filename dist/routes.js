"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');


var _authcontroller = require('./controllers/auth.controller'); var _authcontroller2 = _interopRequireDefault(_authcontroller);
var _usercontroller = require('./controllers/user.controller'); var _usercontroller2 = _interopRequireDefault(_usercontroller);
var _alertcontroller = require('./controllers/alert.controller'); var _alertcontroller2 = _interopRequireDefault(_alertcontroller);
var _alertscontroller = require('./controllers/alerts.controller'); var _alertscontroller2 = _interopRequireDefault(_alertscontroller);
var _categorycontroller = require('./controllers/category.controller'); var _categorycontroller2 = _interopRequireDefault(_categorycontroller);
var _transactioncontroller = require('./controllers/transaction.controller'); var _transactioncontroller2 = _interopRequireDefault(_transactioncontroller);

const routes = _express.Router.call(void 0, );

routes.get('/login', _authcontroller2.default.login);
routes.post('/logout', _authcontroller2.default.logout);

routes.get('/users', _usercontroller2.default.all);
routes.post('/users', _usercontroller2.default.create);

routes.get('/alert', _alertcontroller2.default.all);
routes.post('/alert', _alertcontroller2.default.create);

routes.get('/alerts', _alertscontroller2.default.all);

routes.get('/categories', _categorycontroller2.default.all);
routes.post('/categories', _categorycontroller2.default.create);

routes.get('/transactions', _transactioncontroller2.default.all);
routes.post('/transactions', _transactioncontroller2.default.create);

exports. default = routes;
