"use strict";Object.defineProperty(exports, "__esModule", {value: true});



 class AlertsBuilder {constructor() { AlertsBuilder.prototype.__init.call(this); }
    __init() {this._alerts = {} }

  name (name) {
    this._alerts.name = name;
    return this;
  }

  target (target) {
    this._alerts.target = target;
    return this;
  }

  amount (amount) {
    this._alerts.amount = amount;
    return this;
  }

  status (status) {
    this._alerts.status = status;
    return this;
  }

  condition (condition) {
    this._alerts.condition = condition;
    return this;
  }

  alert (alert) {
    this._alerts.alert = alert;
    return this;
  }

  transaction (transaction) {
    this._alerts.transaction = transaction;
    return this;
  }

  build () {
    return this._alerts;
  }
} exports.AlertsBuilder = AlertsBuilder;
