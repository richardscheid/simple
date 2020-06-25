"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _AlertController = require('./controllers/AlertController'); var _AlertController2 = _interopRequireDefault(_AlertController);
var _AlertsController = require('./controllers/AlertsController'); var _AlertsController2 = _interopRequireDefault(_AlertsController);
var _CategoryController = require('./controllers/CategoryController'); var _CategoryController2 = _interopRequireDefault(_CategoryController);
var _TransactionController = require('./controllers/TransactionController'); var _TransactionController2 = _interopRequireDefault(_TransactionController);

const routes = _express.Router.call(void 0, );

routes.get('/users', _UserController2.default.all);
routes.post('/users', _UserController2.default.create);

routes.get('/alert', _AlertController2.default.all);
routes.post('/alert', _AlertController2.default.create);

routes.get('/alerts', _AlertsController2.default.all);

routes.get('/categories', _CategoryController2.default.all);
routes.post('/categories', _CategoryController2.default.create);

routes.get('/transactions', _TransactionController2.default.all);
routes.post('/transactions', _TransactionController2.default.create);

exports. default = routes;
