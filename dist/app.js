"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _passport = require('passport'); var _passport2 = _interopRequireDefault(_passport);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);

var _secrets = require('./utils/secrets');

class App {
  

   constructor () {
    this.express = _express2.default.call(void 0, );

    this.middlewares();
    this.database();
    this.routes();
  }

   middlewares () {
    this.express.use(_cors2.default.call(void 0, ));
    this.express.use(_express2.default.json());
    this.express.use(_passport2.default.initialize());
    this.express.use(_passport2.default.session());
    this.express.use(_expresssession2.default.call(void 0, {
      resave: true,
      saveUninitialized: true,
      secret: _secrets.SESSION_SECRET
    }));
  }

   database () {
    _mongoose2.default.connect(_secrets.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }

   routes () {
    this.express.use(_routes2.default);
  }
}

exports. default = new App().express;
