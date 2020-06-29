"use strict";Object.defineProperty(exports, "__esModule", {value: true});




















var Status; (function (Status) {
  const Unverified = 0; Status[Status["Unverified"] = Unverified] = "Unverified";
  const Onalert = Unverified + 1; Status[Status["Onalert"] = Onalert] = "Onalert";
  const Verified = Onalert + 1; Status[Status["Verified"] = Verified] = "Verified";
})(Status || (exports.Status = Status = {}));
