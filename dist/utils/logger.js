"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _winston = require('winston'); var _winston2 = _interopRequireDefault(_winston);

const options = {
  transports: [
    new _winston2.default.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
    }),
    new _winston2.default.transports.File({ filename: 'debug.log', level: 'debug' })
  ]
};

const logger = _winston2.default.createLogger(options);

if (process.env.NODE_ENV === 'local') {
  logger.debug('Logging initialized at debug level');
}

exports. default = logger;
