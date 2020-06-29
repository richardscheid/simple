"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 class AlertBuilder {constructor() { AlertBuilder.prototype.__init.call(this); }
    __init() {this._alert  = {} }

  name (name) {
    this._alert.name = name;
    return this;
  }

  target (target) {
    this._alert.target = target;
    return this;
  }

  condition (condition) {
    this._alert.condition = condition;
    return this;
  }

  cagetory (category) {
    if (category) this._alert.category = category;
    return this;
  }

  build () {
    return this._alert;
  }
} exports.AlertBuilder = AlertBuilder;
