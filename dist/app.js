"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

_dotenv2.default.config();

class App {
  

   constructor () {
    this.express = _express2.default.call(void 0, );

    this.middlewares();
    this.database();
    this.routes();
  }

   middlewares () {
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
  }

   database () {
    _mongoose2.default.connect(process.env.DB_URL, {
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
