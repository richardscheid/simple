"use strict";Object.defineProperty(exports, "__esModule", {value: true});



 class TransactionBuilder {constructor() { TransactionBuilder.prototype.__init.call(this); }
    __init() {this._transaction = {} }

  place (place) {
    this._transaction.place = place;
    return this;
  }

  order (order) {
    this._transaction.order = order;
    return this;
  }

  items (items) {
    this._transaction.items = items;
    return this;
  }

  amount (amount) {
    this._transaction.amount = amount;
    return this;
  }

  company (company) {
    this._transaction.company = company;
    return this;
  }

  status (status) {
    this._transaction.status = status;
    return this;
  }

  user (user) {
    this._transaction.user = user;
    return this;
  }

  category (category) {
    this._transaction.category = category;
    return this;
  }

  build ()  {
    return this._transaction;
  }
} exports.TransactionBuilder = TransactionBuilder;
