"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var Conditions; (function (Conditions) {
  const GreaterThan = 0; Conditions[Conditions["GreaterThan"] = GreaterThan] = "GreaterThan";
  const GreaterThanEquals = GreaterThan + 1; Conditions[Conditions["GreaterThanEquals"] = GreaterThanEquals] = "GreaterThanEquals";
  const EqualsTo = GreaterThanEquals + 1; Conditions[Conditions["EqualsTo"] = EqualsTo] = "EqualsTo";
  const LessThan = EqualsTo + 1; Conditions[Conditions["LessThan"] = LessThan] = "LessThan";
  const LessThanEquals = LessThan + 1; Conditions[Conditions["LessThanEquals"] = LessThanEquals] = "LessThanEquals";
})(Conditions || (exports.Conditions = Conditions = {}));
