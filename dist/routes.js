"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const routes = _express.Router.call(void 0, );

routes.get('users/', _UserController2.default.all);
routes.post('users/', _UserController2.default.create);

exports. default = routes;
